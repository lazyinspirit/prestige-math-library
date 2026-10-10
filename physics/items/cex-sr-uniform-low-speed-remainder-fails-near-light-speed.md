---
id: cex-sr-uniform-low-speed-remainder-fails-near-light-speed
kind: counterexample
domain: mathematics
title: 'Counterexample: no speed-independent uniform low-speed remainder for the kinetic energy'
status: draft
origin: session
dependency_level: 14
deps: [lem-sr-uniform-low-speed-taylor-remainder, lem-sr-energy-momentum-observer-identities, thm-sr-proper-time-and-observer-decomposition, def-sr-observed-energy-momentum-and-kinetic-energy, def-sr-affine-minkowski-model, def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors, def-rational-power, def-abs-value, lem-of-abs-value, thm-of-archimedean, def-time-orientation-and-future-causal-sets, thm-path-connected-implies-connected]
dependency_roles:
  thm-path-connected-implies-connected: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  lem-sr-uniform-low-speed-taylor-remainder: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-rational-power: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  thm-of-archimedean: mathematical-premise
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
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement refuted

**False claim.** Let $c>0$ and $m>0$. There is a real $B\ge0$ such that $|T_n(P)-\tfrac12m|w|^2|\le B$ for every future unit $n\in V$, every $P=mU$ with $U$ future timelike and $\eta(U,U)=-c^2$, and the relative velocity $w$ of [[thm-sr-proper-time-and-observer-decomposition]]\,(d), where $T_n$ is the kinetic energy of [[def-sr-observed-energy-momentum-and-kinetic-energy]].

**Counterexample.** Fix a future unit $n$ and a unit vector $e\in n^\perp$ once; for every integer $N\ge2$ use that same vector (possible because $n^\perp$ is a three-dimensional real subspace on which the restriction of $\eta$ is positive definite, so every nonzero vector of $n^\perp$ may be divided by its norm, [[thm-sr-proper-time-and-observer-decomposition]]\,(c)) and put $$w_N:=c\sqrt{1-N^{-2}}\;e,\qquad U_N:=cN\Bigl(n+\frac{w_N}{c}\Bigr),\qquad P_N:=mU_N .$$ Then $|w_N|^2=c^2(1-N^{-2})<c^2$, and $\eta(U_N,U_N)=c^2N^2(-1+|w_N|^2/c^2)=-c^2$ with $U_N$ future timelike, so $U_N$ has the required four-velocity normalization; $u_N=U_N/c$ is future unit timelike; the relative velocity and Lorentz factor of $U_N$ are $w_N$ and $N$, and [[lem-sr-energy-momentum-observer-identities]]\,(b) gives $T_n(P_N)=mc^2(N-1)$ together with $\tfrac12m|w_N|^2=\tfrac12mc^2(1-N^{-2})$. Hence $$T_n(P_N)-\tfrac12m|w_N|^2=mc^2\Bigl(N-\tfrac32+\tfrac1{2N^2}\Bigr),$$ which exceeds any prescribed real $B$ for all sufficiently large $N$; equivalently the relative deviation $\frac{T_n(P_N)-\frac12m|w_N|^2}{\frac12m|w_N|^2}=\frac{(2N+1)(N-1)}{N+1}$ is unbounded in $N$. Therefore the refuted statement is false for every pair $(c,m)$, and any valid low-speed error bound must depend on the admissible speed domain (the constants $K(z_0)$ of [[pthm-sr-newtonian-p-e-correspondence]] do). The construction is a statement about the stipulated model and contains no empirical claim.

## Facts & Assumptions

**Given:** The affine Minkowski model $(A,V,\eta,C^+)$ of [[def-sr-affine-minkowski-model]], a real $c>0$ and a real $m>0$, a future unit vector $n$ (a nonzero vector $v$ of $C^+$ divided by the positive square root $(-\eta(v,v))^{1/2}$ of the positive number $-\eta(v,v)$, [[def-rational-power]]), and a unit vector $e\in n^\perp$.

[L1] The model is an oriented time-oriented affine Minkowski space, so $\eta$ has inertia $(3,1,0)$, a vector is timelike when $\eta(v,v)<0$ and spacelike when $\eta(v,v)>0$, and the time orientation $C^+$ is one of the two connected components of the timelike set, hence nonempty and closed under positive scalar multiples; a future unit vector $n$ has $n\in C^+$ and $\eta(n,n)=-1$ ([[def-sr-affine-minkowski-model]], [[def-lorentz-form-and-inertia]], [[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]).

[L2] Rest space and relative velocity: $n^\perp=\{v:\eta(n,v)=0\}$ is a three-dimensional linear subspace on which $\eta$ restricts to a positive definite form with norm $|w|=\sqrt{\eta(w,w)}$; for a future unit $u$, $\gamma=-\eta(n,u)\ge1$, $w=c\,h(u)/\gamma\in n^\perp$ with $h(u)=u+\eta(n,u)n$, $u=\gamma(n+w/c)$, $|w|^2=c^2(1-\gamma^{-2})$ and $\gamma=(1-|w|^2/c^2)^{-1/2}$ ([[thm-sr-proper-time-and-observer-decomposition]]\,(c),(d)).

[L3] Observer identities: for $P=mU$ with $m>0$ constant and $U$ future timelike, $\eta(U,U)=-c^2$, one has $E_n(P)=mc^2\gamma$, $T_n(P)=mc^2(\gamma-1)$ and $q_n(P)=m\gamma w$, where $\gamma,w$ are the relative Lorentz factor and velocity of $U$ and $T_n(P)=E_n(P)-mc^2$ is the kinetic energy after the parameter $m$ is fixed ([[lem-sr-energy-momentum-observer-identities]]\,(b), [[def-sr-observed-energy-momentum-and-kinetic-energy]]).

[L4] Powers and absolute values: for $x>0$ the rational power $x^{1/2}$ is the positive square root, and negative integer powers are the special case of [[def-rational-power]] on positive bases; $|x|\ge0$, $|xy|=|x|\,|y|$ and $|x|=x$ for $x\ge0$ ([[def-abs-value]], [[lem-of-abs-value]]).

[L5] Archimedean property: for every real $x$ there is a natural number $n\ge1$ with $x<n\cdot1_{\mathbb R}$, so an integer $N>x$ may be chosen ([[thm-of-archimedean]]).



[L6] Every path in a topological space has both endpoints in one connected component ([[thm-path-connected-implies-connected]], clause 3).

## Counterexample

**Proof technique:** direct.

1.1 The fixed data and the family. Fix once and for all the future unit $n$ and the unit vector $e\in n^\perp$; such data exist because timelike vectors exist by the inertia $(3,1,0)$ of the form and any nonzero timelike vector can be normalized by dividing by the positive rational power $(-\eta(v,v))^{1/2}$, and because $n^\perp$ is a three-dimensional positive definite space by [L2]. For every integer $N\ge2$ set $w_N:=c\sqrt{1-N^{-2}}\,e$, $U_N:=cN(n+w_N/c)$ and $P_N:=mU_N$, using the same $n$ and $e$ for every $N$. [given, L1, L2, L4]

2.1 The normalization of $U_N$. Since $e\in n^\perp$ is unit, $\eta(e,e)=|e|^2=1$ and $\eta(n,w_N)=c\sqrt{1-N^{-2}}\,\eta(n,e)=0$, so $\eta(w_N,w_N)=c^2(1-N^{-2})=|w_N|^2<c^2$. Hence $$\eta(U_N,U_N)=c^2N^2\Bigl(\eta(n,n)+2\eta(n,w_N/c)+\eta(w_N/c,w_N/c)\Bigr)=c^2N^2\Bigl(-1+\bigl(1-N^{-2}\bigr)\Bigr)=-c^2,$$ and the continuous segment $a(s)=n+sw_N/c$, $0\le s\le1$, has $\eta(a(s),a(s))=-1+s^2(1-N^{-2})<0$ throughout. The segment is continuous in any transported Euclidean norm because $|a(s)-a(t)|_E=|s-t|\,|w_N/c|_E$. By [L6], its endpoint lies in the same component as $n\in C^+$ ([[def-time-orientation-and-future-causal-sets]]). Thus $n+w_N/c\in C^+$ and $U_N=cN(n+w_N/c)$ is future timelike by positive scaling. [step 1.1, L1, L2, L6, algebra]

3.1 The relative velocity and Lorentz factor of $U_N$. The vector $u_N:=U_N/c=N(n+w_N/c)$ satisfies $\eta(u_N,u_N)=-1$ by step 2.1, so $u_N$ is future unit and $\gamma_N:=-\eta(n,u_N)=-N\eta(n,n)-N\eta(n,w_N)/c=N\ge1$. By [L2], the relative velocity of $U_N$ is $w=c\,h(u_N)/\gamma_N=c\,N\,h(n+w_N/c)/N=c\,h(w_N/c)=w_N$ and its Lorentz factor is $N$; consistently $|w_N|^2=c^2(1-N^{-2})=c^2(1-\gamma_N^{-2})$. [step 2.1, L2, algebra]

4.1 The kinetic energy and the comparison value. By [L3] applied to $P_N=mU_N$ with Lorentz factor $\gamma_N=N$ from step 3.1, $$T_n(P_N)=mc^2(N-1),\qquad \tfrac12m|w_N|^2=\tfrac12mc^2\bigl(1-N^{-2}\bigr),$$ so $$T_n(P_N)-\tfrac12m|w_N|^2=mc^2\Bigl(N-1-\tfrac12+\tfrac1{2N^2}\Bigr)=mc^2\Bigl(N-\tfrac32+\tfrac1{2N^2}\Bigr).$$ For $N\ge2$ this difference is positive, hence equal to its absolute value: $N-\tfrac32+\tfrac1{2N^2}>N-\tfrac32\ge\tfrac12>0$ for every $N\ge2$. [step 3.1, L3, L4, algebra]

5.1 The relative deviation. The ratio of the difference of step 4.1 to the comparison value $\tfrac12m|w_N|^2=\tfrac12mc^2(1-N^{-2})$ equals $$\frac{N-\tfrac32+\tfrac1{2N^2}}{\tfrac12(1-N^{-2})}=\frac{2N^3-3N^2+1}{N^2-1}=\frac{(N-1)^2(2N+1)}{(N-1)(N+1)}=\frac{(N-1)(2N+1)}{N+1}\ge N-1,$$ using $(N-1)^2(2N+1)=2N^3-3N^2+1$ and $(2N+1)\ge(N+1)$ for $N\ge0$. [step 4.1, L4, algebra]

6.1 Both sequences are unbounded. Let $B\ge0$ be any real. By [L5] choose an integer $N>\max\{2,\,B/(mc^2)+\tfrac32\}$. Then by step 4.1, $$\bigl|T_n(P_N)-\tfrac12m|w_N|^2\bigr|=mc^2\Bigl(N-\tfrac32+\tfrac1{2N^2}\Bigr)>mc^2\bigl(N-\tfrac32\bigr)>B,$$ so the bound $B$ fails at the admissible state $(n,P_N)$; and by step 5.1 the relative deviation at that $N$ is at least $N-1>B/(mc^2)+\tfrac12$, so it is unbounded as well. Since $B\ge0$ was arbitrary and the construction uses one fixed future unit $n$, the refuted claim fails for every pair $(c,m>0)$. [step 4.1, step 5.1, L4, L5, algebra]

7.1 Conclusion. The displayed family of states $P_N=mU_N$ in the stipulated model has $T_n(P_N)-\tfrac12m|w_N|^2\to\infty$ with the relative deviation also tending to infinity, so no real constant $B$ can bound $|T_n(P)-\tfrac12m|w|^2|$ uniformly over all admissible states; a valid low-speed error bound necessarily depends on the admissible speed domain, as the constants $K(z_0)$ of [[pthm-sr-newtonian-p-e-correspondence]] do, which is confirmed independently by the bounded $z\le z_0$ hypothesis of [[lem-sr-uniform-low-speed-taylor-remainder]]. No experimental, measurement or other empirical claim is made. [step 6.1, L1] ∎
