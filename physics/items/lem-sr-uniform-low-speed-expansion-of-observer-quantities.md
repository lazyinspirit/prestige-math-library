---
id: lem-sr-uniform-low-speed-expansion-of-observer-quantities
kind: lemma
domain: mathematics
title: 'Uniform low-speed expansion of the observer energy, momentum and kinetic energy of a massive four-momentum'
status: draft
origin: session
dependency_level: 14
deps: [lem-sr-uniform-low-speed-taylor-remainder, lem-sr-energy-momentum-observer-identities, thm-sr-proper-time-and-observer-decomposition, def-sr-observed-energy-momentum-and-kinetic-energy, def-sr-affine-minkowski-model, def-rational-power, def-integer-power, def-abs-value, lem-of-abs-value]
dependency_roles:
  lem-sr-uniform-low-speed-taylor-remainder: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-rational-power: mathematical-premise
  def-integer-power: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas restored to x^0 = c t; Section 4.2 pp. 82-86 (relativistic kinetic energy; Example 5 p. 86, the Newtonian prediction eV = (1/2)mv^2), Section 4.3.3 Example 8 p. 91 (the Newtonian limit v = p/m), Section 4.3.4 p. 96 (p = m gamma v; the momentum of a material particle approaches infinity as its speed approaches c) and problems 11-12 p. 116 (expand K = m(gamma-1) and p = m gamma v in Taylor series; show the first terms are the nonrelativistic expressions)'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997); signature (-+++) with c = 1. Chapter 1 printed p. 27, equations (1.98)-(1.101) (PDF p. 34): for small v, p^0 = m + (1/2)mv^2 (rest energy plus kinetic energy) and p^1 = mv (Newtonian momentum); Chapter 4 printed pp. 105-106 (PDF pp. 112-113): the Newtonian limit, the slow-motion condition (4.10) and the weak static field'
      url: 'https://arxiv.org/pdf/gr-qc/9712019'
    - title: 'D. Tong, General Relativity (Cambridge Part III lecture notes, 2019), Section 1.2.2 pp. 14-16 (relativistic free-particle action and the Lorentz factor gamma = (1-|xdot|^2/c^2)^(-1/2)) and Section 1.2.3 pp. 16-19, in particular the Taylor expansion (1.22) on printed p. 17 (-mc^2 + (m/2)|xdot|^2 - m Phi(x) + ... obtained by expanding the square root) (author-hosted copy of the official Cambridge PDF)'
      url: 'https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski model ([[def-sr-affine-minkowski-model]]), $c>0$, let $n\in V$ be future unit with $\eta(n,n)=-1$, and let $P=mU$ with $m>0$ and $U\in V$ future timelike, $\eta(U,U)=-c^2$. Let $E_n(P)$, $q_n(P)$, $T_n(P)$ and $m(P)$ be the observer energy, spatial momentum, kinetic energy and invariant mass of [[def-sr-observed-energy-momentum-and-kinetic-energy]], put $h(v):=v+\eta(n,v)n$ as in [[thm-sr-proper-time-and-observer-decomposition]]\,(c), and let $\gamma:=-\eta(U/c,n)\ge1$ and $w:=h(U)/\gamma=c\,h(U/c)/\gamma\in n^\perp$ be the Lorentz factor and relative velocity of [[thm-sr-proper-time-and-observer-decomposition]]\,(d); then $u:=U/c$ satisfies $u=\gamma(n+w/c)$, $|w|^2=c^2(1-\gamma^{-2})$ and $\gamma=(1-|w|^2/c^2)^{-1/2}$, and [[lem-sr-energy-momentum-observer-identities]]\,(b) gives $E_n(P)=mc^2\gamma$, $q_n(P)=m\gamma w$, $T_n(P)=mc^2(\gamma-1)$ and $m(P)=m$.

Let $z_0\in[0,1)$, suppose $z:=|w|^2/c^2\le z_0$, put $K(z_0):=\tfrac38(1-z_0)^{-5/2}$, and let $f,R$ be as in [[lem-sr-uniform-low-speed-taylor-remainder]], so that $\gamma=f(z)$ and $\gamma=1+\tfrac z2+R(z)$ with $|R(z)|\le K(z_0)z^2$. Then:

(a) $E_n(P)=mc^2+\tfrac12m|w|^2+R_E$ and $T_n(P)=\tfrac12m|w|^2+R_E$ for the common real number $R_E:=mc^2R(z)$, and $$|R_E|\le K(z_0)\,z\,m|w|^2=K(z_0)\,\frac{m|w|^4}{c^2},\qquad \Bigl|T_n(P)-\tfrac12m|w|^2\Bigr|\le 2K(z_0)\,z\,\tfrac12m|w|^2 .$$

(b) $q_n(P)=mw+R_q$ with $R_q:=m(\gamma-1)w$, and $$|R_q|\le m|w|\Bigl(\frac z2+K(z_0)z^2\Bigr)\le\Bigl(\frac12+K(z_0)z_0\Bigr)z\,m|w| ;$$ moreover $|q_n(P)|=mc\sqrt{\gamma^2-1}=m\gamma|w|$ and $m(P)=m$.

(c) Every constant above depends only on $z_0$, so the estimates are uniform over all future unit $n$, all $m>0$ and all $P=mU$ with $|w|^2\le z_0c^2$; if $z=0$ (equivalently $w=0$, $U=cn$) then $R_E=R_q=0$, $E_n(P)=mc^2$, $q_n(P)=0$ and $T_n(P)=0$. The lemma is a statement about the mathematical model only; it asserts no measured quantity, no approximation of a physical theory and no error estimate for any experiment.

## Facts & Assumptions

**Given:** The affine Minkowski model $(A,V,\eta,C^+)$, $c>0$, a future unit $n$, $P=mU$ with $m>0$ and $U$ future timelike with $\eta(U,U)=-c^2$, the projection $h(v)=v+\eta(n,v)n$, the numbers $\gamma=-\eta(U/c,n)$ and $w=h(U)/\gamma$, a bound $z_0\in[0,1)$ with $z:=|w|^2/c^2\le z_0$, and $K(z_0)=\tfrac38(1-z_0)^{-5/2}$.

[L1] The observer quantities: $E_n(P)=-c\eta(P,n)$, $q_n(P)=h(P)\in n^\perp$, $m(P)=\sqrt{-\eta(P,P)}/c$ for nonzero future causal $P$, and $T_n(P)=E_n(P)-mc^2$ after the constant $m>0$ is fixed; $P=(E_n(P)/c)n+q_n(P)$ is the unique decomposition of $P$ along $n$ and $n^\perp$ ([[def-sr-observed-energy-momentum-and-kinetic-energy]]).

[L2] Projection and relative velocity: $h$ is linear with image $n^\perp$, kernel $\mathrm{span}(n)$, $h(n)=0$, and the restriction of $\eta$ to $n^\perp$ is positive definite with norm $|w|=\sqrt{\eta(w,w)}$; for future unit $u$ one has $\gamma=-\eta(n,u)\ge1$, $w=c\,h(u)/\gamma\in n^\perp$, $u=\gamma(n+w/c)$, $|w|^2=c^2(1-\gamma^{-2})$, $\gamma=(1-|w|^2/c^2)^{-1/2}$, and $\gamma=1$ if and only if $u=n$ ([[thm-sr-proper-time-and-observer-decomposition]]\,(c),(d)).

[L3] Observer identities: for $P=mU$ with $m>0$ constant and $U$ future timelike, $\eta(U,U)=-c^2$, and $\gamma,w$ as above, one has $E_n(P)=mc^2\gamma$, $T_n(P)=mc^2(\gamma-1)\ge0$, $q_n(P)=m\gamma w$, $m(P)=m$ and $|q_n(P)|=mc\sqrt{\gamma^2-1}=m\gamma|w|$ ([[lem-sr-energy-momentum-observer-identities]]\,(b)).

[L4] Uniform Taylor remainder: for $z_0\in[0,1)$ and $0\le z\le z_0$, $f(z)=(1-z)^{-1/2}=1+\tfrac z2+R(z)$ with $|R(z)|\le K(z_0)z^2$; in particular $f(0)=1$ and $R(0)=0$ ([[lem-sr-uniform-low-speed-taylor-remainder]]).

[L5] Model and powers: the model data are those of [[def-sr-affine-minkowski-model]]; $|w|^2=\eta(w,w)\ge0$ on $n^\perp$ and $z=|w|^2/c^2\ge0$; rational powers such as $(1-z)^{-1/2}$ are those of [[def-rational-power]] and integer powers those of [[def-integer-power]].

[L6] Scalar absolute values satisfy $|ab|=|a|\,|b|$, $|a|\ge0$, and $|a|=a$ for $a\ge0$ ([[def-abs-value]], [[lem-of-abs-value]]). The rest-space norm supplied by [L2] ([[thm-sr-proper-time-and-observer-decomposition]]\,(c)) satisfies $|\lambda v|=|\lambda|\,|v|$ for $v\in n^\perp$.

## Proof

**Proof technique:** direct.

1.1 Relative velocity and the Taylor form of $\gamma$. The map $h$ is linear by [L2], so $h(U)=c\,h(U/c)$ and $w=h(U)/\gamma=c\,h(U/c)/\gamma$; the vector $u:=U/c$ is future unit and $\gamma=-\eta(n,u)\ge1$, so [L2]\,(d) gives $w\in n^\perp$, $u=\gamma(n+w/c)$, $|w|^2=c^2(1-\gamma^{-2})$ and $\gamma=(1-|w|^2/c^2)^{-1/2}=(1-z)^{-1/2}=f(z)$. By [L4] applied to $z\le z_0$ we have $\gamma=1+\tfrac z2+R(z)$ with $|R(z)|\le K(z_0)z^2$; define $R_E:=mc^2R(z)$. [given, L2, L4, L5, algebra]

1.2 The observer identities. By [L3] at these data, $E_n(P)=mc^2\gamma$, $T_n(P)=mc^2(\gamma-1)$, $q_n(P)=m\gamma w$, $m(P)=m$ and $|q_n(P)|=mc\sqrt{\gamma^2-1}=m\gamma|w|$; define $R_q:=q_n(P)-mw=m(\gamma-1)w$. [given, L3, algebra]

1.3 Translating $z$ into norms. Since $z=|w|^2/c^2$, we have $mc^2z=m|w|^2$, and also $K(z_0)z^2mc^2=K(z_0)z\,m|w|^2=K(z_0)m|w|^4/c^2$. Both expressions are nonnegative because $m>0$, $K(z_0)>0$ and $|w|^2\ge0$. [given, L5, L6, algebra]

2.1 Part (a), the expansions. By steps 1.1 and 1.2, $E_n(P)=mc^2\bigl(1+\tfrac z2+R(z)\bigr)=mc^2+\tfrac12m|w|^2+R_E$ using $mc^2\tfrac z2=\tfrac12m|w|^2$ from step 1.3, and $T_n(P)=E_n(P)-mc^2=\tfrac12m|w|^2+R_E$ by the definition of $T_n$ in [L1]. [step 1.1, step 1.2, step 1.3, L1, algebra]

2.2 Part (a), the bounds. By step 1.1, $|R_E|=mc^2|R(z)|\le mc^2K(z_0)z^2=K(z_0)zm|w|^2=K(z_0)m|w|^4/c^2$ using step 1.3; the second displayed bound is $|T_n(P)-\tfrac12m|w|^2|=|R_E|\le K(z_0)zm|w|^2=2K(z_0)z\cdot\tfrac12m|w|^2$. [step 1.1, step 1.3, L4, L6, algebra]

2.3 Part (b). By step 1.2, $q_n(P)=mw+R_q$ with $R_q=m(\gamma-1)w$. Norm homogeneity [L6] gives $|R_q|=m|\gamma-1|\,|w|$; since $\gamma=f(z)$, the bound on $|f(z)-1|$ of [[lem-sr-uniform-low-speed-taylor-remainder]]\,(b) gives
$$|R_q|\le m|w|\bigl(\tfrac z2+K(z_0)z^2\bigr)\le m|w|\,z\bigl(\tfrac12+K(z_0)z_0\bigr),$$
where the final inequality uses $z\le z_0$ and $K(z_0)>0$. The norm identity $|q_n(P)|=mc\sqrt{\gamma^2-1}=m\gamma|w|$ and $m(P)=m$ are those of step 1.2. [step 1.1, step 1.2, L4, L6, algebra]

3.1 Uniformity and the case $z=0$. The remainders $R_E=mc^2R(z)$ and $R_q=m(\gamma-1)w$ and the bounds of steps 2.2 and 2.3 depend on the state only through $z$, $m$ and $|w|$, and their constants depend on $z_0$ alone, so the estimates hold uniformly over all future unit $n$, all $m>0$ and all $P=mU$ with $|w|^2\le z_0c^2$. If $z=0$ then $\gamma=(1-z)^{-1/2}=1$ by step 1.1, so $u=n$ and $w=0$ by [L2]\,(d), whence $R(0)=0$ by [L4], $R_E=0$, $R_q=0$, and steps 1.2 and 2.1 give $E_n(P)=mc^2$, $q_n(P)=0$, $T_n(P)=0$; conversely $w=0$ gives $z=0$, and $U=cn$ is the same case. [step 2.1, step 2.2, step 2.3, L1, L2, L4, algebra]

4.1 Conclusion. Steps 2.1 and 2.2 are clauses (a), step 2.3 is clause (b) including the norm identity and $m(P)=m$, and step 3.1 is clause (c) with the uniformity statement and the $z=0$ case; no step used more than the stated hypotheses $z\le z_0<1$, $m>0$ and the model's normalization, and the statement concerns the mathematical model only. [step 3.1, given] ∎
