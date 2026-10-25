---
id: ex-qftx-gaga-analytic-equal-completions
kind: example
title: Unequal local rings with equal completions
status: "published"
origin: pipeline
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC, inherited from the faithful-flatness theorem."
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-multiplicative-subset-and-localisation
  - thm-qftx-gaga-analytic-local-ring-flatness
  - lem-qftx-bounded-power-series-holomorphy-and-coefficient-uniqueness
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-multiplicative-subset-and-localisation: mathematical-premise
  thm-qftx-gaga-analytic-local-ring-flatness: mathematical-premise
  lem-qftx-bounded-power-series-holomorphy-and-coefficient-uniqueness: mathematical-premise
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Jean-Pierre Serre, Géométrie algébrique et géométrie analytique, §2, no. 6 and Annex §§22–24"
      url: "https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf"
    - title: "Johannes Anschütz, Lecture Notes on Étale Cohomology, §§3.24–3.26"
      url: "https://janschuetz.perso.math.cnrs.fr/skripte/lecture_notes_etale_cohomology.pdf"
    - title: "Kiran S. Kedlaya, MIT OpenCourseWare 18.726, Lecture 22: GAGA"
      url: "https://ocw.mit.edu/courses/18-726-algebraic-geometry-spring-2009/1329d3923b9f2d55ec7a9ec8e9cb63e9_MIT18_726s09_lec22_gaga.pdf"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Assume the Axiom of Choice. Let $A=\mathbb C[t]_{(t)}$ be the localization of
$\mathbb C[t]$ at polynomials nonzero at $0$, and let $B=\mathbb C\{t\}$ be
the ring of holomorphic germs at $0$. The canonical map $A\to B$ is faithfully
flat and induces the common completion $\mathbb C\llbracket t\rrbracket$, but it is not
surjective: the convergent exponential germ
$e(t)=\sum_{n=0}^{\infty}t^n/n!$ is not in its image.

## Example references

[Serre, local algebraic-to-holomorphic comparison and flat-pair appendix](https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf)

[Anschütz, analytification of locally finite-type schemes](https://janschuetz.perso.math.cnrs.fr/skripte/lecture_notes_etale_cohomology.pdf)

[MIT OpenCourseWare, Lecture 22: GAGA](https://ocw.mit.edu/courses/18-726-algebraic-geometry-spring-2009/1329d3923b9f2d55ec7a9ec8e9cb63e9_MIT18_726s09_lec22_gaga.pdf)

## Facts & Assumptions

**Given:** AC, the local rings $A$ and $B$, and the exponential germ $e(t)$ in the statement.

[A1] AC is the principle that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] Every element of $A=\mathbb C[t]_{(t)}$ has a fraction representative $p(t)/q(t)$ with $p,q\in\mathbb C[t]$ and $q(0)\ne0$ ([[def-multiplicative-subset-and-localisation]]).

[F2] The local algebraic-to-holomorphic map for the finite-type chart $\mathbb A^1_{\mathbb C}$ at $0$ is faithfully flat and induces the common completion $\mathbb C\llbracket t\rrbracket$ ([[thm-qftx-gaga-analytic-local-ring-flatness]]).

[F3] If two coefficient families satisfy bounds $|c_n|\le M r^{-n}$ and $|c'_n|\le M' r^{-n}$ on a common positive radius $r$, and their sums agree throughout $|t|<r$, then their coefficients agree ([[lem-qftx-bounded-power-series-holomorphy-and-coefficient-uniqueness]]).

[F4] If its coefficients satisfy $|c_n|\le M r^{-n}$ on a positive radius $r$, the power series defines a holomorphic function on $|t|<r$ ([[lem-qftx-bounded-power-series-holomorphy-and-coefficient-uniqueness]]).

## Verification

1.1 Apply [F2] to $X=\operatorname{Spec}\mathbb C[t]$ and its closed point $t=0$. It gives faithful flatness of $A\to B$ and identifies both maximal-ideal completions with $\mathbb C\llbracket t\rrbracket$. [given, A1, F2]

1.2 Fix any $R>0$ and put $u_n=R^n/n!$. Choose $N$ with $N+1\ge2R$. For every $k\ge0$, $u_{N+k+1}/u_{N+k}=R/(N+k+1)\le1/2$, so induction gives $u_{N+k}\le u_N2^{-k}$. The finite identity $\sum_{k=0}^K2^{-k}=2-2^{-K}\le2$ bounds every partial sum of the tail by $2u_N$. Define the explicit finite constant $M_R=\sum_{n=0}^{N-1}u_n+2u_N$, with an empty initial sum interpreted as zero. For $n<N$, $u_n$ is one nonnegative summand of $M_R$; for $n\ge N$, the geometric estimate gives $u_n\le u_N\le M_R$. Thus $R^n/n!\le M_R$ for every $n$, without passing to an infinite sum; hence for any $0<r<R$, $1/n!\le M_RR^{-n}\le M_Rr^{-n}$. The coefficient family of $e(t)$ therefore satisfies the exact uniform bound required by [F4] on radius $r$, so [F4] makes its sum holomorphic on $|t|<r$. As $R$ is arbitrary, these disks cover a neighborhood of $0$ (indeed all of $\mathbb C$), and $e$ defines a holomorphic germ. [given, F4, algebra]

2.1 Suppose $e(t)=p(t)/q(t)$ in $A$, with $q(0)\ne0$. Then $q(t)e(t)=p(t)$ as germs and evaluation at $0$ gives $p(0)=q(0)\ne0$. Write $q(t)=\sum_{j=0}^{d}q_jt^j$ with $q_d\ne0$, and let $m=\deg p$. Equality of germs supplies $\varepsilon>0$ such that $qe=p$ on $|t|<\varepsilon$. Fix $R>0$ and choose $0<r<\min(R,\varepsilon)$. By step 1.2 the coefficients $c_n=1/n!$ of $e$ satisfy $|c_n|\le M_Rr^{-n}$. The coefficient $b_N=\sum_{j=0}^{\min(d,N)}q_jc_{N-j}$ of $qe$ satisfies $|b_N|\le M_Rr^{-N}\sum_{j=0}^d|q_j|r^j$. If $p_N$ denotes the coefficient of $t^N$ in $p$, then $|p_N|\le M_pr^{-N}$ for all $N$, where $M_p=\max_{0\le N\le m}|p_N|r^N$. Thus both series satisfy the common-radius bound in [F3], and their sums agree on $|t|<r$, so [F3] gives $b_N=p_N$ for every $N$. For every integer $N>\max(d,m)$ this yields $\sum_{j=0}^{d}q_j/(N-j)!=0$. Multiplying by $N!$ gives $Q(N)=0$, where $Q(z)=\sum_{j=0}^{d}q_j z(z-1)\cdots(z-j+1)$. This is a nonzero polynomial of degree $d$ with leading coefficient $q_d$. To prove the needed root bound locally, a nonzero constant has no roots. If a degree-$d$ polynomial $P$ with $d>0$ has a root $a$, the finite identities $z^j-a^j=(z-a)\sum_{\ell=0}^{j-1}z^{j-1-\ell}a^\ell$ give $P(z)=P(z)-P(a)=(z-a)S(z)$, where $S$ has degree $d-1$ and the same nonzero leading coefficient. Every other root $b\ne a$ satisfies $(b-a)S(b)=0$, hence $S(b)=0$ because the nonzero complex number $b-a$ is invertible. Induction gives at most $d-1$ such roots and at most $d$ roots in total. Applying this bound to $Q$ contradicts its vanishing on the infinitely many distinct integers $N>\max(d,m)$. This contradiction proves that $e(t)$ is not in the image of $A$. [F1, F3, step 1.2, algebra]

3.1 Step 1.1 establishes faithful flatness and equality of completions, while step 2.1 establishes failure of surjectivity. [step 1.1, step 2.1] ∎
