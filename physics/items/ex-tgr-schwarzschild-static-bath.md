---
id: ex-tgr-schwarzschild-static-bath
kind: example
title: Schwarzschild supported thermal bath
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
deps:
  - pthm-tgr-tolman-ehrenfest
dependency_roles:
  pthm-tgr-tolman-ehrenfest: physical-result
physical_scope: "Static test bath on the Schwarzschild exterior r>r_s, with asymptotic Killing-time normalization, exact lapse and acceleration, and a bounded weak-field expansion; no horizon or quantum-temperature claim."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "MIT OpenCourseWare 8.033 (Fall 2024), Introduction to Relativity and Spacetime Physics, full lecture notes, §§18.2.2 and 19.1"
      url: "https://ocw.mit.edu/courses/8-033-introduction-to-relativity-and-spacetime-physics-fall-2024/mit8_033_f24_lec_full.pdf"
      locator: "Full 197-page PDF; Schwarzschild metric and static observer clock normalization, PDF pp. 144–155."
    - title: "Jessica Santiago and Matt Visser, Tolman-like temperature gradients in stationary spacetimes, §§III and VII.A"
      url: "https://arxiv.org/pdf/1807.02915"
      locator: "Full 7-page PDF; static Killing-flow temperature relation and Schwarzschild/Reissner–Nordström context, PDF pp. 3 and 5–6."
---

## Example

Let $m_s>0$ be a source mass in kilograms, distinct from any kinetic particle mass, let $G_N>0$ be Newton's constant in $\mathrm{m^3\,kg^{-1}\,s^{-2}}$, and let $c>0$ be the speed of light in $\mathrm{m\,s^{-1}}$. Set

$r_s:=\frac{2G_Nm_s}{c^2},\qquad f(r):=1-\frac{r_s}{r},\qquad r>r_s.$

In physical length coordinates $x^0=ct$, use the Schwarzschild exterior metric

$ds^2=-f(r)(dx^0)^2+f(r)^{-1}dr^2+r^2(d\theta^2+\sin^2\theta\,d\phi^2),$

and select $\xi=\partial_{x^0}$ with the asymptotic normalization $N_\xi\to1$ as $r\to\infty$. The time orientation is chosen so $\xi$ is future-directed. Under the selected stationary-bath assumption, the local proper temperature satisfies

$T(r)=\frac{T_\infty}{\sqrt{1-r_s/r}},\qquad T_\infty:=T_K>0.$

The static observer congruence has outward covariant acceleration component $a_r=r_s/(2r^2f)$, contravariant component $a^r=r_s/(2r^2)$, and physical proper-acceleration magnitude

$c^2\sqrt{g_{ab}a^aa^b}=\frac{G_Nm_s}{r^2\sqrt{f(r)}}.$

For a fixed $z_0\in(0,1)$ and $0<r_s/r\le z_0$, the weak-field expansion has the explicit bound

$\left|\frac{T(r)}{T_\infty}-1-\frac{G_Nm_s}{c^2r}\right|\le\frac38(1-z_0)^{-5/2}\left(\frac{r_s}{r}\right)^2.$

This is a conditional calculation in the specified exterior model. At $r=r_s$, the chosen Killing field is null and the normalized stationary observers do not exist. The limiting divergence as $r\downarrow r_s$ is not a constructed horizon state, a Hawking temperature, or a claim that every observer measures an infinite temperature.

## Facts & Assumptions

**Given:** The Schwarzschild exterior metric and constants above, the chosen future Killing field $\xi$, and the selected stationary thermal-bath assumption on $r>r_s$.

[F1] [[pthm-tgr-tolman-ehrenfest]]: for one selected connected stationary bath with smooth future timelike Killing field $\xi$, positive proper temperature $T$, and Killing $\beta=u/(k_BT)$, the constant $T_K>0$ satisfies $N_\xi T=T_K$ and $a=\nabla\log N_\xi$. Its draft proof is conditional and its current Step 1 record is authoring readiness only.

[A1] $m_s>0$, $G_N>0$, and $c>0$ have the stated SI units; the metric is taken as the model geometry on $r>r_s$, and the time orientation makes $\partial_{x^0}$ future-directed there.

[A2] This example adopts the selected bath only on the connected exterior, with the chosen asymptotic normalization. No matter equation of state, support apparatus, experiment, or state construction is assumed.

## Verification
**Proof technique:** Compute the norm of the chosen Killing field, apply the conditional Tolman theorem, and differentiate the explicit lapse.

1.1 The metric coefficients are independent of $x^0$, so $\xi=\partial_{x^0}$ is Killing. Its norm is $g(\xi,\xi)=-f(r)$, and $f(r)>0$ exactly on $r>r_s$. Therefore it is future timelike on this domain and $N_\xi=\sqrt{f(r)}$. [given, A1, algebra]

2.1 The connected exterior, smooth positive lapse, selected stationary bath, and Killing inverse-temperature field meet [F1]. Hence $N_\xi T=T_K$ throughout the exterior, so $T=T_K/\sqrt f$. Since $N_\xi\to1$ as $r\to\infty$, write this reference constant as $T_\infty=T_K$. [given, A2, F1, step 1.1]

2.2 From $a=\nabla\log N_\xi$ in [F1], $a_r=\partial_r(\tfrac12\log f)=r_s/(2r^2f)$. Raising the index with $g^{rr}=f$ gives $a^r=r_s/(2r^2)$, and then $g_{ab}a^aa^b=f^{-1}(a^r)^2$, so $c^2|a|=c^2r_s/(2r^2\sqrt f)=G_Nm_s/(r^2\sqrt f)$. [F1, step 1.1, algebra]

3.1 Put $z=r_s/r$. For $0<z\le z_0<1$, Taylor's theorem at $z=0$ for $\varphi(z)=(1-z)^{-1/2}$ gives $\varphi(z)=1+z/2+\varphi''(\theta z)z^2/2$ for some $\theta\in(0,1)$, and $\varphi''(y)=\tfrac34(1-y)^{-5/2}$. Thus the remainder is at most $\tfrac38(1-z_0)^{-5/2}z^2$. Since $z/2=G_Nm_s/(c^2r)$, this proves the displayed bound. [given, algebra] ∎
