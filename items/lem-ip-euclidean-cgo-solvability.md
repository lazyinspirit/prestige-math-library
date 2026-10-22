---
id: lem-ip-euclidean-cgo-solvability
kind: lemma
title: "Euclidean complex geometrical optics solvability with an H1 correction"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - def-sobolev-space-wkp-and-its-norm
  - def-riemannian-gradient
  - def-laplace-beltrami-operator-as-trace-of-the-hessian
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Mikko Salo, Calderon problem, full lecture notes (2008)"
      url: "https://users.jyu.fi/~salomi/lecturenotes/calderon_lectures.pdf"
      locator: "Section 3.2, Theorems 3.7-3.9 and complete shifted-lattice Fourier construction, PDF pp. 20-25."
---

## Statement

Assume Countable Choice. Let $n\geq3$, let $\Omega\subset\mathbb R^n$ be a bounded smooth domain contained in a ball $B(0,R)$, and let $q\in L^\infty(\Omega,\mathbb C)$. There are constants $C>0$ and $\tau_0\geq1$, depending only on $n$, $R$, and $\|q\|_{L^\infty}$, such that for every $\zeta\in\mathbb C^n$ satisfying $\zeta\cdot\zeta=0$ and $|\zeta|\geq\tau_0$, there is $r_\zeta\in H^1(\Omega,\mathbb C)$ for which
$$u_\zeta(x)=e^{i\zeta\cdot x}(1+r_\zeta(x))$$
solves $(-\Delta+q)u_\zeta=0$ distributionally in $\Omega$, and
$$\|r_\zeta\|_{L^2(\Omega)}\leq C|\zeta|^{-1}\|q\|_{L^2(\Omega)},\qquad \|\nabla r_\zeta\|_{L^2(\Omega)}\leq C\|q\|_{L^2(\Omega)}.$$
The dot product in the null-phase condition is complex bilinear, and $|\zeta|=(\sum_{j=1}^n|\zeta_j|^2)^{1/2}$.

## Statement references

[[def-sobolev-space-wkp-and-its-norm|Euclidean Sobolev spaces and weak derivatives]]

[[def-riemannian-gradient|Gradient convention]]

[[def-laplace-beltrami-operator-as-trace-of-the-hessian|Euclidean Laplacian convention]]

[[thm-fourier-basis-and-parseval-on-the-n-torus|Fourier basis and Parseval on the torus]]

## Facts & Assumptions

**Given:** Countable Choice; a bounded smooth domain $\Omega\subset\mathbb R^n$; $q\in L^\infty(\Omega,\mathbb C)$; and a null vector $\zeta$ above the stated size threshold.

[A1] [[def-countable-choice]] is assumed by the Fourier-basis supplier [F1].

[F1] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: on a normalized $n$-torus, the coordinate characters form a complete orthonormal basis of $L^2$ and satisfy Parseval's identity. Rescaling the fundamental cube and multiplying by a unit-modulus exponential preserve completeness and orthonormality.

[F2] [[def-sobolev-space-wkp-and-its-norm]], [[def-riemannian-gradient]], and [[def-laplace-beltrami-operator-as-trace-of-the-hessian]]: $H^1$ consists of $L^2$ functions with $L^2$ weak first derivatives, $D=-i\nabla$ has the same norm as $\nabla$, and $D^2=-\Delta$.

## Proof

**Given:** the data in the Statement.

1.1 Write $\zeta=a+ib$. The null condition gives $|a|=|b|=:s=|\zeta|/\sqrt2$ and $a\cdot b=0$. Choose an orthogonal map $U$ with $Ua=se_1$ and $Ub=se_2$. Work temporarily with $U\Omega$, $q\circ U^{-1}$, and the phase $U\zeta$, relabeling them $\Omega$, $q$, and $\zeta$ for the construction; the Euclidean Laplacian, Lebesgue norms, and null phase are invariant under this change, and the constructed remainder is pulled back by $U$ at the end. As $\Omega\subset B(0,R)$, choose $L>\max\{1,(R+1)/\pi\}$; then $\Omega\subset Q_L=(-\pi L,\pi L)^n$. Put $\eta_k=(k+\tfrac12e_2)/L$ and $w_k(x)=(2\pi L)^{-n/2}e^{i\eta_k\cdot x}$ for $k\in\mathbb Z^n$. By [F1], these form an orthonormal basis on $Q_L$: they are the rescaled standard Fourier characters multiplied by the unitary factor $e^{ix_2/(2L)}$. For $A_\zeta=D^2+2\zeta\cdot D$, one has $A_\zeta w_k=p_kw_k$, where $p_k=|\eta_k|^2+2\zeta\cdot\eta_k$ and $|\operatorname{Im}p_k|=2s|k_2+\tfrac12|/L\geq s/L$. If $|\eta_k|\leq4s$, then $|p_k|\geq s/L$ and $|\eta_k/p_k|\leq4L$. If $|\eta_k|>4s$, then $|\operatorname{Re}p_k|\geq|\eta_k|^2-2s|\eta_k|\geq|\eta_k|^2/2$, so $|p_k|^{-1}<1/(8s^2)\leq L/s$ and $|\eta_k/p_k|<1/(2s)$. Thus $\sup_k|p_k|^{-1}\leq L/s$ and $\sup_k|\eta_k/p_k|\leq C_L$. Define $G_\zeta f=\sum_k p_k^{-1}(f,w_k)w_k$. Parseval [F1] gives $\|G_\zeta f\|_2\leq (L/s)\|f\|_2$ and $\|\nabla G_\zeta f\|_2\leq C_L\|f\|_2$. For finite Fourier sums $f_N$, the corresponding partial sums $G_\zeta f_N$ satisfy $A_\zeta G_\zeta f_N=f_N$ termwise. Parseval and the multiplier bounds give $f_N\to f$ in $L^2(Q_L)$ and $G_\zeta f_N\to G_\zeta f$ in $H^1(Q_L)$. Since $A_\zeta:H^1(Q_L)\to H^{-1}_{\rm loc}(Q_L)$ continuously, passage to distributions yields $A_\zeta G_\zeta f=f$. [A1, F1, F2, given, algebra, construct]

2.1 Extend $q$ and $F:=-q$ by zero from $\Omega$ to $Q_L$. Multiplication by $q$ is bounded on $L^2(Q_L)$, and $$\|qG_\zeta\|_{L^2\to L^2}\leq \|q\|_\infty L/s.$$ Choose $\tau_0$ large enough that $s\geq2L\|q\|_\infty$ and $s\geq1$ whenever $|\zeta|\geq\tau_0$. Then the series $\widetilde F=\sum_{m=0}^\infty(-qG_\zeta)^mF$ converges in $L^2(Q_L)$, satisfies $(I+qG_\zeta)\widetilde F=F$, and has norm at most $2\|q\|_{L^2(\Omega)}$. Set $r_\zeta=G_\zeta\widetilde F$ and restrict it to $\Omega$. Step 1.1 gives $A_\zeta r_\zeta+q r_\zeta=F=-q$ on $\Omega$, as well as $\|r_\zeta\|_2\leq (2L/s)\|q\|_2$ and $\|\nabla r_\zeta\|_2\leq2C_L\|q\|_2$. [F1, given, step 1.1, algebra, construct]

3.1 Since $D=-i\nabla$, conjugation gives $$e^{-i\zeta\cdot x}(-\Delta+q)e^{i\zeta\cdot x}(1+r_\zeta) =(D^2+2\zeta\cdot D+\zeta\cdot\zeta+q)(1+r_\zeta).$$ The null condition removes $\zeta\cdot\zeta$, the constant amplitude has zero derivatives, and step 2.1 makes the remaining expression $q+A_\zeta r_\zeta+q r_\zeta=0$. Multiplication by the smooth exponential preserves $H^1(\Omega)$ for this fixed $\zeta$, so $u_\zeta\in H^1(\Omega)$ and solves the equation distributionally. The estimates in step 2.1 have $s=|\zeta|/\sqrt2$, giving the asserted bounds after changing the constant. [F2, given, step 2.1, algebra] ∎

