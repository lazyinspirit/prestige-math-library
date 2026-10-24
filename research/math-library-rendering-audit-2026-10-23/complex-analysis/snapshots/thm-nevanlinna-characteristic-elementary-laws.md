---
id: thm-nevanlinna-characteristic-elementary-laws
kind: theorem
title: "Elementary characteristic laws and fixed rational composition"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nevanlinna-counting-proximity-and-characteristic, thm-fundamental-theorem-of-algebra-liouville-proof, thm-nevanlinna-first-main-theorem]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §2, algebraic properties (a)–(d)"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions, Ch. 1 §6, equations (6.1)–(6.8), Theorems 6.1–6.2"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
---

## Statement

For meromorphic $f,g$ on $\mathbb C$, as $r\to\infty$,
$$T(r,fg)\le T(r,f)+T(r,g)+O(1),\qquad T(r,f+g)\le T(r,f)+T(r,g)+O(1).$$
If $f$ is not identically zero, then
$$T(r,1/f)=T(r,f)+O_f(1).$$
If $R=P/Q$ is a fixed rational map written with coprime polynomials and $d=\max(\deg P,\deg Q)$, then for nonconstant meromorphic $f$ and $d\ge1$,
$$T(r,R(f))=d\,T(r,f)+O_{R,f}(1).$$
A degree-zero rational map is constant and has bounded characteristic after composition with $f$.

## Facts & Assumptions

**Given:** Meromorphic functions on $\mathbb C$; counting, proximity, and characteristic are normalized as in [[def-nevanlinna-counting-proximity-and-characteristic]].

[F1] The normalized chordal distance and the proximity and characteristic are defined by the formulas in [[def-nevanlinna-counting-proximity-and-characteristic]].

[F2] $N(r,a;h)=n(0,a;h)\log r+\int_0^r(n(t,a;h)-n(0,a;h))\,dt/t$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F3] For nonconstant meromorphic $h$ and any finite target $a$, $m(r,a;h)+N(r,a;h)=T(r,h)+C(h,a)$ for every $r>0$ ([[thm-nevanlinna-first-main-theorem]]).

[F4] Every nonconstant complex polynomial has a complex root ([[thm-fundamental-theorem-of-algebra-liouville-proof]]); in particular the normalized denominator $Q$ of degree $d\ge1$ in step 4.1 has a nonempty finite zero set.

## Proof

**Proof technique:** Compare the chordal characteristic with $T_0=m_0+N_\infty$, where $m_0(r,h)$ is the circular mean of $\log^+|h|$. Prove the algebraic laws for $T_0$, then transfer them across the uniformly bounded normalization difference.

1.1 Define $T_0(r,h)=m_0(r,h)+N(r,\infty;h)$. For every finite $w$, $\log^+|w|\le\tfrac12\log(1+|w|^2)\le\log^+|w|+\tfrac12\log2$. By [F1], $m(r,\infty;h)$ is the mean of $\tfrac12\log(1+|h|^2)$, so averaging gives $0\le T(r,h)-T_0(r,h)\le\tfrac12\log2$ for every meromorphic $h$ and $r>0$. [F1, algebra]

2.1 For complex $x,y$, $\log^+|xy|\le\log^+|x|+\log^+|y|$ and $\log^+|x+y|\le\log^+|x|+\log^+|y|+\log2$. At each point the pole order of either $fg$ or $f+g$ is at most the sum of the pole orders of $f$ and $g$; this includes cancellation and the identically zero sum, whose pole order is zero. For $r\ge1$, every pole-count weight in [F2] is nonnegative, including the centre weight $\log r$. Integrating the logarithmic bounds and the divisor bounds gives both upper laws for $T_0$; step 1.1 transfers them to $T$. [F1, F2, step 1.1, algebra]

2.2 Suppose first that $f$ is nonconstant and not identically zero. Away from its zeros and poles, [F1] gives $\log(1/\delta(f,0))=\tfrac12\log(1+|f|^2)-\log|f|=\tfrac12\log(1+|1/f|^2)$. The poles of $1/f$ are precisely the zeros of $f$ with the same multiplicities. Therefore $T(r,1/f)=m(r,0;f)+N(r,0;f)=T(r,f)+C(f,0)$ by [F1] and [F3]. If $f$ is a nonzero constant, both characteristics are constant in $r$. This proves the reciprocal law for $T$; step 1.1 gives the same law for $T_0$ with a bounded error. [F1, F3, step 1.1, algebra]

2.3 Let $P(w)=a_pw^p+\cdots+a_0$ with $p\ge1$ and $a_p\ne0$. For sufficiently large $|w|$, the leading term bounds $|P(w)|$ above and below by positive constant multiples of $|w|^p$; on the remaining compact $w$-disc both $\log^+|P(w)|$ and $p\log^+|w|$ are bounded. Hence $\log^+|P(w)|=p\log^+|w|+O_P(1)$ uniformly in $w$. Averaging gives $m_0(r,P(f))=p m_0(r,f)+O_P(1)$. At every pole of $f$ of order $\lambda$, the leading term of $P$ makes $P(f)$ have pole order exactly $p\lambda$, and $P(f)$ has no other poles. Thus [F2] gives $N(r,\infty;P(f))=pN(r,\infty;f)$, and step 1.1 yields $T(r,P(f))=pT(r,f)+O_P(1)$. If $P$ is constant, $P(f)$ is constant and has bounded characteristic. [F1, F2, step 1.1, algebra]

3.1 Let $R=P/Q$ be nonconstant of degree $d\ge1$, with $P,Q$ coprime. The composition $R(f)$ is nonconstant: otherwise the connected image of the nonconstant meromorphic map $f:\mathbb C\to\widehat{\mathbb C}$ would lie in a finite fiber of $R$. By step 2.2, replacing $R$ by $1/R$ changes the characteristic of its composition by only $O_{R,f}(1);$ this handles $\deg P=d>\deg Q$. If $\deg P=\deg Q=d$, subtract $c=R(\infty)$: translating a meromorphic function by a constant changes $m_0$ by a bounded amount and leaves its pole orders unchanged, while $P-cQ$ has degree less than $d$. Thus it suffices to prove the result when $\deg Q=d$ and $\deg P<d$. [step 2.2, algebra]

4.1 In this normalized case, the nonempty finite zero set of $Q$ is disjoint from that of $P$. If $P$ has zeros, let $\epsilon$ be one third of the minimum distance between the two finite zero sets; if $P$ has none, take any $\epsilon>0$. Let $\Gamma$ be the union of the open $\epsilon$-discs around the zeros of $Q$ and put $\Omega=\widehat{\mathbb C}\setminus\Gamma$. Its closure avoids the zeros of $P$. On $\overline\Gamma$, $|P|$ has a positive lower bound and a finite upper bound, so $|R|=|P/Q|$ is bounded above and below by positive constant multiples of $|1/Q|$. On $\Omega$, both $R$ and $1/Q$ are bounded, including at infinity because $\deg P<\deg Q$. Splitting each circle into the sets where $f$ lies in $\Gamma$ and $\Omega$, these comparisons and the boundedness of $\log^+$ on bounded values give $m_0(r,R(f))=m_0(r,1/Q(f))+O_R(1)$. Values at isolated poles are interpreted through their integrable logarithmic singularities. [F4, step 3.1, algebra]

5.1 The pole divisors of $R(f)$ and $1/Q(f)$ agree. At a point where $f$ is finite, a pole occurs exactly when $Q(f)=0$; coprimality makes $P(f)\ne0$ there, so its order is the zero order of $Q(f)$. At a pole of $f$, the inequalities $\deg P<\deg Q=d$ imply both $R(f)\to0$ and $1/Q(f)\to0$, so neither has a pole. Hence [F2] gives $N(r,\infty;R(f))=N(r,\infty;1/Q(f))$. Combining this with step 4.1 yields $T_0(r,R(f))=T_0(r,1/Q(f))+O_R(1)$. [F2, step 3.1, step 4.1, algebra]

6.1 Since $f$ is nonconstant, $Q(f)$ is not identically zero: otherwise the connected image of $f$ would lie in the finite zero set of $Q$, forcing $f$ to be constant. Applying the reciprocal law of step 2.2 and the polynomial law of step 2.3 gives $T_0(r,1/Q(f))=T_0(r,Q(f))+O_{Q,f}(1)=dT_0(r,f)+O_{Q,f}(1)$. Step 1.1 transfers this estimate to $T$, while steps 3.1 and 5.1 reduce the original composition to this normalized estimate. [step 1.1, step 2.2, step 2.3, step 3.1, step 5.1, algebra]

7.1 If $d=0$, $R$ is a constant $c$ and $R(f)$ has no poles; by [F1], $T(r,R(f))=\tfrac12\log(1+|c|^2)$ for every $r$, which is bounded. [F1, algebra] ∎
