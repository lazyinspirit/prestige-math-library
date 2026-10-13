---
id: lem-gr-observer-relative-velocity-expansions
kind: lemma
title: "Low-velocity expansions of observer energy and momentum with uniform error bounds"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observer-relative-energy-and-momentum, lem-gr-observer-energy-momentum-identities, def-gr-observer-and-rest-space, lem-gr-observer-projection-decomposition, def-gr-smooth-lorentzian-objects, cor-taylor-lagrange-and-cauchy-remainders, thm-mean-value-inequality-for-total-derivatives, def-causal-classification-of-lorentz-vectors, def-interval, def-rational-power, thm-real-power-agrees-with-rational-exponent, thm-real-power-continuity-and-derivatives, thm-chain-rule, thm-algebra-of-derivatives]
dependency_roles:
  def-gr-observer-relative-energy-and-momentum: mathematical-premise
  lem-gr-observer-energy-momentum-identities: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  cor-taylor-lagrange-and-cauchy-remainders: mathematical-premise
  thm-mean-value-inequality-for-total-derivatives: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-interval: mathematical-premise
  def-rational-power: mathematical-premise
  thm-real-power-agrees-with-rational-exponent: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1: the low-velocity expansions E = m + (1/2)mv^2 and p = mv of the relativistic energy and momentum, printed p. 27 (PDF p. 34)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 1.2: the relativistic energy-momentum relation and its nonrelativistic limit, printed pp. 15-19 (PDF pp. 22-26)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 1.1: four-momentum, rest mass and the low-velocity reading of energy and momentum, printed pp. 5-8 (PDF pp. 6-9)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, $p\in M$,
$n$ an observer at $p$ and $P\in T_pM$ a future timelike vector with rest
mass $m:=m(P)>0$ ([[def-gr-observer-relative-energy-and-momentum]],
[[def-gr-observer-and-rest-space]]). Write $U:=P/m$, $u:=U/c$,
$\gamma:=-g_p(n,u)$ and, as in clause 3 of
[[lem-gr-observer-energy-momentum-identities]],

$$w:=\frac{c\,h_n(u)}{\gamma}\in n^\perp,\qquad s:=\sqrt{g_p(w,w)} .$$

For $z\in n^\perp$ write $|z|_n:=\sqrt{g_p(z,z)}$, the norm from the positive-definite restriction of $g_p$ to $n^\perp$. Thus $s=|w|_n$, and $|q_n(P)|$ in the displays below means $|q_n(P)|_n$; $q_n(P)\in n^\perp$ by the observer decomposition.

Then $s<c$, $\gamma=(1-s^2/c^2)^{-1/2}$,

$$E_n(P)=mc^2\Bigl(1-\frac{s^2}{c^2}\Bigr)^{-1/2},\qquad |q_n(P)|=ms\Bigl(1-\frac{s^2}{c^2}\Bigr)^{-1/2},$$

and for every $0\le v_0<c$, with $z_0:=v_0^2/c^2<1$ and all $s\le v_0$,

$$\Bigl|E_n(P)-mc^2-\tfrac12ms^2\Bigr|\le\tfrac38\,(1-z_0)^{-5/2}\,\frac{ms^4}{c^2},\qquad \Bigl||q_n(P)|-ms\Bigr|\le\tfrac12\,(1-z_0)^{-3/2}\,\frac{ms^3}{c^2} .$$

## Facts & Assumptions

**Given:** The Lorentz vector space data $n,P$ of the statement, with $m>0$, $U=P/m$, $u=U/c$, $\gamma=-g_p(n,u)$, $w=c\,h_n(u)/\gamma$ and $s=\sqrt{g_p(w,w)}$.

[L1] For a future timelike $P$ with $m=m(P)>0$: $\gamma\ge1$, $E_n(P)=mc^2\gamma$, $q_n(P)=m\gamma w$, $g_p(q_n,q_n)=m^2c^2(\gamma^2-1)$ and $E_n^2=m^2c^4+c^2g_p(q_n,q_n)$ ([[lem-gr-observer-energy-momentum-identities]] clause 3, [[def-gr-observer-relative-energy-and-momentum]] clauses (a)-(b)).

[L2] Taylor's theorem with Lagrange remainder: if $f$ is $C^2$ on an interval containing $0$ and $z$, then $|f(z)-f(0)-f'(0)z|\le\tfrac12\sup_{0\le t\le z}|f''(t)|z^2$; if $f$ is $C^1$, then $|f(z)-f(0)|\le\sup_{0\le t\le z}|f'(t)|z$ ([[cor-taylor-lagrange-and-cauchy-remainders]], [[thm-mean-value-inequality-for-total-derivatives]], [[def-interval]]).

[L3] For $z<1$, the base $1-z$ is positive; the rational power defined by [[def-rational-power]] at exponent $-\tfrac12$ agrees with the corresponding real power ([[thm-real-power-agrees-with-rational-exponent]]). The real-power derivative formula $(y^\alpha)'=\alpha y^{\alpha-1}$ for $y>0$, applied at $\alpha=-\tfrac12$ and then $\alpha=-\tfrac32$, together with the chain and scalar rules ([[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]), gives $f(z)=(1-z)^{-1/2}\in C^2((-\infty,1))$ and $$f'(z)=\tfrac12(1-z)^{-3/2},\qquad f''(z)=\tfrac34(1-z)^{-5/2}.$$

## Proof

**Proof technique:** direct; read $\gamma$ and the velocity from the mass-shell identities, then expand the resulting scalar functions with the Lagrange remainder.

1.1 (The relative speed and the Lorentz factor.) Combining $q_n=m\gamma w$ with $g_p(q_n,q_n)=m^2c^2(\gamma^2-1)$ from [L1] gives $m^2\gamma^2s^2=m^2c^2(\gamma^2-1)$, hence $\gamma^2(c^2-s^2)=c^2$; since $\gamma\ge1>0$ this reads $\gamma=(1-s^2/c^2)^{-1/2}$, and the identity forces $s<c$ as well as $s^2/c^2=1-\gamma^{-2}$. [L1, algebra]

1.2 (Taylor bounds for the Lorentz factor.) Let $f(z):=(1-z)^{-1/2}$ on $[0,z_0]$ with $z_0<1$. By [L3] and [L2], $$|f(z)-1-\tfrac12z|\le\tfrac12\sup_{t\in[0,z_0]}|f''(t)|z^2=\tfrac38(1-z_0)^{-5/2}z^2,\qquad |f(z)-1|\le\sup_{t\in[0,z_0]}|f'(t)|z=\tfrac12(1-z_0)^{-3/2}z .$$ [L2, L3, algebra]

2.1 (Energy and momentum formulas.) By [L1] and step 1.1, $g_p(q_n,q_n)=m^2\gamma^2s^2$ and $\gamma>0$, so $|q_n(P)|=\sqrt{g_p(q_n,q_n)}=m\gamma s$; hence, with $E_n=mc^2\gamma$, $E_n(P)=mc^2(1-s^2/c^2)^{-1/2}$ and $|q_n(P)|=ms(1-s^2/c^2)^{-1/2}$. [step 1.1, L1, algebra]

3.1 (Energy expansion.) Substituting $z=s^2/c^2$ in the first bound of step 1.2 into $E_n=mc^2f(z)$ of step 2.1 gives $|E_n-mc^2-\tfrac12ms^2|\le mc^2\cdot\tfrac38(1-z_0)^{-5/2}(s^4/c^4)=\tfrac38(1-z_0)^{-5/2}ms^4/c^2$. [step 2.1, step 1.2, algebra]

3.2 (Momentum expansion.) Likewise $|q_n|=msf(z)$ by step 2.1, so $||q_n|-ms|=ms|f(z)-1|\le ms\cdot\tfrac12(1-z_0)^{-3/2}(s^2/c^2)=\tfrac12(1-z_0)^{-3/2}ms^3/c^2$. [step 2.1, step 1.2, algebra]

4.1 (Conclusion.) Step 2.1 gives the identities of the statement (including $s<c$), and steps 3.1 and 3.2 give the two uniform error bounds for $s\le v_0<c$. [step 2.1, step 3.1, step 3.2, given] ∎

## Remarks

- **Restriction to a cone.** The statement is a low-velocity expansion for $s\le v_0<c$ with constants blowing up as $v_0\uparrow c$; near the light cone the expansion is useless and no claim is made there.
- **No dynamics.** The lemma is purely kinematic: it expands the observer-relative energy and momentum of a tangent vector. It asserts no conservation, no force law and no observation.
