---
id: thm-frostman-equilibrium-theorem
kind: theorem
title: "Frostman inequalities and quasi-everywhere equilibrium equality"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-logarithmic-potential-and-energy
  - def-logarithmic-capacity-compact-set
  - def-support-of-a-borel-measure
  - def-polar-set-and-quasi-everywhere
  - def-plane-subharmonic-function
  - thm-equilibrium-measure-existence-and-uniqueness
  - lem-logarithmic-potential-distributional-laplacian
  - lem-logarithmic-energy-strict-positivity-for-zero-mass-charges
  - lem-logarithmic-potential-maximum-principle
  - lem-compact-polar-sets-and-subharmonic-minus-infinity-loci
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §1"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, Theorem 1.12 (Frostman's theorem), printed p. 174"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §3"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3, equilibrium potential and Frostman's theorem, PDF pp. 26-30"
    - title: "C. Kuehn, Introduction to Potential Theory via Applications, §2.3"
      url: "https://arxiv.org/pdf/0804.4689"
      locator: "§2.3, the equilibrium potential and its constancy, PDF pp. 13-16"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $K\subseteq\mathbb C$ be compact with
$\operatorname{cap}(K)>0$ and let $\mu_K$ be its equilibrium measure
([[thm-equilibrium-measure-existence-and-uniqueness]]). Then

$$U^{\mu_K}(z)\le V_K\quad\text{for every }z\in\mathbb C,$$

and $U^{\mu_K}(z)=V_K$ outside a Borel capacity-polar subset of $K$; the
exceptional set may be taken to be a countable union of compact sets of
capacity zero. Here $U^{\mu_K}$, $V_K$ and cap are those of
[[def-logarithmic-potential-and-energy]],
[[def-logarithmic-capacity-compact-set]] and the polarity convention of
[[def-polar-set-and-quasi-everywhere]].

The Axiom of Choice is spent through the equilibrium-measure existence theorem
[[thm-equilibrium-measure-existence-and-uniqueness]], applied to $K$ and to the
nonpolar compact subsets of $K$ that occur in the argument, and through the
Evans-potential lemma
[[lem-compact-polar-sets-and-subharmonic-minus-infinity-loci]] used for the
countable-union closure of the polar class; that lemma assumes only Dependent
Choice, which the Axiom of Choice supplies. The potential and energy estimates
themselves are choice-free.

## Facts & Assumptions

**Given:** a nonempty compact set $K\subseteq\mathbb C$ with
$\operatorname{cap}(K)>0$, its equilibrium measure $\mu_K$, the Axiom of
Choice, and the potential, energy, capacity and polarity conventions of
[[def-logarithmic-potential-and-energy]],
[[def-logarithmic-capacity-compact-set]],
[[def-polar-set-and-quasi-everywhere]] and
[[def-support-of-a-borel-measure]].

[F1] Let $\rho,\sigma$ be finite positive Borel measures carried by a common
compact set $L$, and take $R>\max\{1,\operatorname{diam}L\}$. Then
$k_R=k+\log R\ge0$ on $L\times L$. If $0\le\sigma\le\rho$, product measure
monotonicity gives $\sigma\otimes\sigma\le\rho\otimes\rho$, hence
$$I(\sigma)\le I(\rho)+\bigl(\rho(\mathbb C)^2-\sigma(\mathbb C)^2\bigr)\log R,$$
which is finite when $I(\rho)<+\infty$. If $\rho$ and $\sigma$ have equal total
mass and finite energies, Countable Choice and
[[lem-logarithmic-energy-strict-positivity-for-zero-mass-charges]] give a finite
mixed energy and
$$I(\rho,\sigma)=\tfrac12\bigl(I(\rho)+I(\sigma)-I(\rho-\sigma)\bigr) \le\tfrac12\bigl(I(\rho)+I(\sigma)\bigr).$$
No pointwise monotonicity $U^\sigma\le U^\rho$ is asserted: the unshifted
kernel changes sign ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

For a finite positive Borel measure $\nu$ of compact support,
$U^\nu(z)=\int k(z,w)\,d\nu(w)$ with $k(z,w)=\log\frac1{|z-w|}\in(-\infty,+\infty]$
and diagonal value $+\infty$, $p_\nu=-U^\nu$ is the subharmonic
normalisation, $I(\nu)=\iint k\,d\nu\,d\nu\in(-\infty,+\infty]$ computed from
the shifted nonnegative kernel $k_R=k+\log R$ for
$R>\operatorname{diam}\operatorname{supp}\nu$, and the mixed energy
$I(\nu,\rho)=\iint k\,d\nu\,d\rho$ is symmetric
([[def-logarithmic-potential-and-energy]]). If
$\operatorname{diam}\operatorname{supp}\nu>0$ then
$k\ge-\log\operatorname{diam}\operatorname{supp}\nu$ on
$\operatorname{supp}\nu\times\operatorname{supp}\nu$, so
$I(\nu)=\iint k\,d\nu\,d\nu>-\infty$.

[F2] $V_K=\inf_{\nu\in P(K)}I(\nu)\in(-\infty,+\infty]$ and
$\operatorname{cap}(K)=e^{-V_K}$ when $V_K<+\infty$ and $0$ otherwise; so
$\operatorname{cap}(K)>0$ is equivalent to $V_K<+\infty$
([[def-logarithmic-capacity-compact-set]]).

[F3] The support $S=\operatorname{supp}\mu$ of a finite positive Borel measure
$\mu$ is closed, carries $\mu$, is contained in every closed carrier, and
$\mu\ne0$ if and only if $S\ne\varnothing$; in particular every ball about a
point of $S$ has positive $\mu$-measure
([[def-support-of-a-borel-measure]]).

[F4] Capacity-polar means that every compact subset has capacity zero;
quasi-everywhere means outside a Borel capacity-polar set
([[def-polar-set-and-quasi-everywhere]],
[[def-logarithmic-capacity-compact-set]]).

[F5] Assume the Axiom of Choice: every nonempty compact $K$ with
$\operatorname{cap}(K)>0$ has exactly one equilibrium measure $\mu_K$, and
$I(\mu_K)=V_K=\inf_{P(K)}I<+\infty$; if $\operatorname{cap}(K)=0$ then
$V_K=+\infty$ and no equilibrium measure is asserted
([[thm-equilibrium-measure-existence-and-uniqueness]]).

[F6] $p_\nu$ is subharmonic on $\mathbb C$ for every finite positive compactly
supported $\nu$, hence upper semicontinuous with values in $[-\infty,\infty)$,
and $U^\nu=-p_\nu$ is lower semicontinuous with values in $(-\infty,+\infty]$;
consequently every sublevel set $\{U^\nu\le c\}$ is closed
([[lem-logarithmic-potential-distributional-laplacian]],
[[def-plane-subharmonic-function]]).

[F7] If $\nu\ne0$ is finite positive, compactly supported and
$U^\nu\le M$ on $\operatorname{supp}\nu$ for some real $M$, then $U^\nu\le M$
on all of $\mathbb C$ ([[lem-logarithmic-potential-maximum-principle]]).

[F8] Assume Dependent Choice. A compact set $E\subseteq\mathbb C$ has
$\operatorname{cap}(E)=0$ if and only if there are a complex domain
$\Omega\supseteq E$ and a function subharmonic on $\Omega$ with
$E\subseteq\{u=-\infty\}$; and if $(F_j)_{j\ge1}$ is a specified sequence of
compact sets with $\operatorname{cap}(F_j)=0$ for every $j$, then there is a
function $u$ subharmonic on all of $\mathbb C$, not identically $-\infty$,
with $u=-\infty$ on $\bigcup_jF_j$
([[lem-compact-polar-sets-and-subharmonic-minus-infinity-loci]]).

[F9] The Axiom of Choice implies Dependent Choice, which implies Countable
Choice ([[thm-choice-implies-dependent-implies-countable-choice]]), the choice
principle used by [F6].

## Proof

**Proof technique:** direct.

1.1 By [F2] and [F5] the hypothesis $\operatorname{cap}(K)>0$ gives $V_K<+\infty$ and the equilibrium measure $\mu:=\mu_K\in P(K)$ with $I(\mu)=V_K$; $\mu$ is carried by $K$, so by [F3] its support $S=\operatorname{supp}\mu$ is a nonempty compact subset of $K$ with $\mu(\mathbb C\setminus S)=0$ and $\mu(B)>0$ for every ball $B$ about a point of $S$. [F2, F3, F5, given]

2.1 Since $\operatorname{diam}K>0$ the kernel is bounded below on $K\times K$, so [F1] gives $I(\mu)=\iint k\,d\mu\,d\mu=\int_{\mathbb C}U^\mu\,d\mu$ by Tonelli and $\int_SU^\mu\,d\mu=I(\mu)=V_K$; moreover, by [F1] with the common carrier $K$ and $R>\max\{1,\operatorname{diam}K\}$, every finite positive measure $\sigma\le\mu$ carried by $K$ has $I(\sigma)\le I(\mu)+\bigl(\mu(\mathbb C)^2-\sigma(\mathbb C)^2\bigr)\log R<+\infty$, and the mixed energy of two finite positive compactly supported measures with finite energy is finite; in particular $I(\mu,\nu)<+\infty$ for every $\nu\in P(K)$ with $I(\nu)<+\infty$. [step 1.1, F1, F9]

3.1 Minimality inequality: for every $\nu\in P(K)$ with $I(\nu)<+\infty$ and $I(\mu,\nu)<+\infty$ one has $I(\mu,\nu)\ge V_K$. Indeed, for $t\in[0,1]$ the convex combination $\mu_t:=(1-t)\mu+t\nu$ lies in $P(K)$, so $I(\mu_t)\ge V_K=I(\mu)$ by [F2] and [F5]; expanding the double integral of $\mu_t\otimes\mu_t$ with [F1] gives $I(\mu_t)=(1-t)^2I(\mu)+2t(1-t)I(\mu,\nu)+t^2I(\nu)$, so subtracting $I(\mu)$, dividing by $2t>0$ and letting $t\downarrow0$ yields $I(\mu,\nu)-I(\mu)\ge0$, that is $I(\mu,\nu)\ge V_K$. [step 2.1, F1, F2, F5]

4.1 Claim: $U^\mu(x_0)\le V_K$ for every $x_0\in S$. Suppose not, and choose $\eta>0$ with $U^\mu(x_0)>V_K+\eta$ (if $U^\mu(x_0)=+\infty$ any $\eta>0$ will do); by [F6] the set $\{U^\mu>V_K+\eta\}$ is open, so there is $r>0$ with $U^\mu>V_K+\eta$ on the disc $B:=B(x_0,r)$; put $m:=\mu(K\cap B)$, so $0<m\le1$ by step 1.1. If $m=1$ then $\mu$ is carried by $K\cap B$, so by step 2.1, where $\int_{\mathbb C}U^\mu\,d\mu=I(\mu)=V_K$ is a finite real number, $V_K=\int_{K\cap B}U^\mu\,d\mu\ge m(V_K+\eta)=V_K+\eta>V_K$, a contradiction; hence $0<m<1$. The restriction $\sigma:=\mu\!\restriction_{K\setminus B}$ satisfies $0\le\sigma\le\mu$ and $\sigma(\mathbb C)=1-m>0$, so $\nu:=\sigma/(1-m)\in P(K)$ has $I(\nu)=I(\sigma)/(1-m)^2<+\infty$ and $I(\mu,\nu)<+\infty$ by step 2.1, while the pointwise bound on $B$ and $\int_{\mathbb C}U^\mu\,d\mu=V_K$ give $$I(\mu,\nu)=\frac1{1-m}\int_{K\setminus B}U^\mu\,d\mu=\frac1{1-m}\Bigl(V_K-\int_{K\cap B}U^\mu\,d\mu\Bigr)\le\frac{V_K-m(V_K+\eta)}{1-m}=V_K-\frac{m\eta}{1-m}<V_K,$$ contradicting step 3.1; so no such $x_0$ exists. [step 1.1, step 2.1, step 3.1, F1, F3, F6, assume-hyp, contradiction]

5.1 Since $\mu\ne0$ and $U^\mu\le V_K$ on $S=\operatorname{supp}\mu$ by step 4.1, the maximum principle [F7] with $M:=V_K$ gives $U^{\mu_K}(z)\le V_K$ for every $z\in\mathbb C$, which proves the first assertion and in particular gives the finiteness $I(\mu,\nu_F)=\int U^\mu\,d\nu_F\le V_K$ for every $\nu_F\in P(K)$ below. [step 1.1, step 4.1, F7]

6.1 For $n\ge1$ the set $E_n:=\{z\in K:U^\mu(z)\le V_K-1/n\}$ is compact, because $K$ is compact and $\{U^\mu\le c\}$ is closed by [F6]; if $F\subseteq E_n$ were compact with $\operatorname{cap}(F)>0$, then [F5] applied to $F$ would give an equilibrium measure $\nu_F$ with $\operatorname{supp}\nu_F\subseteq F$, and steps 3.1 and 5.1 would give the contradictory chain $V_K\le I(\mu,\nu_F)=\int U^\mu\,d\nu_F\le V_K-1/n<V_K$; hence every compact subset of $E_n$ has capacity zero. [step 3.1, step 5.1, F4, F5, F6, contradiction]

7.1 By step 6.1 each $E_n$ has the property that every compact subset has capacity zero, in the sense of [F4]. Hence $E:=\bigcup_{n\ge1}E_n$ is capacity-polar: if $F\subseteq E$ is compact, then $F=\bigcup_{n\ge1}(F\cap E_n)$ is a specified countable union of compact sets $F\cap E_n\subseteq E_n$ of capacity zero, so the specified-$F_\sigma$ clause of [F8] supplies a function subharmonic on $\mathbb C$ that equals $-\infty$ on all of $F$, and the compact clause of [F8], applied with $\Omega=\mathbb C$, gives $\operatorname{cap}(F)=0$. Thus $E$ is a Borel capacity-polar subset of $K$ (it is a countable union of compact sets), and for $z\in K\setminus E$ one has $U^\mu(z)>V_K-1/n$ for every $n\ge1$, hence $U^\mu(z)\ge V_K$, while step 5.1 gives $U^\mu(z)\le V_K$; therefore $U^\mu=V_K$ on $K\setminus E$, which is the second assertion. [step 5.1, step 6.1, F4, F8, F9] ∎

## Remarks

**Why the two halves are different.** The inequality $U^\mu\le V_K$ everywhere is the part that uses the minimality of $\mu$ through the competitor $\nu$ obtained by deleting a small disc of large potential; the reverse inequality $U^\mu\ge V_K$ needs no minimality beyond the perturbed-copy inequality of step 3.1 and in fact only holds quasi-everywhere, as the isolated-point example of [[def-polar-set-and-quasi-everywhere]] shows.

**Choice.** The Axiom of Choice enters through [F5] for $K$ and again for the compact sets $F\subseteq E_n$ of step 6.1, and through [F8] in step 7.1, whose Evans-potential lemma assumes only Dependent Choice; the running argument is otherwise choice-free, and [F6] needs only Countable Choice, which [F9] supplies.

**Sharpness of the exceptional set.** The exceptional set is a countable union of compact zero-capacity sets, and step 7.1 shows through [F8] that such a union is again capacity-polar (the definition alone tests only compact subsets and does not supply the countable-union closure); so the statement is exactly the classical "equals $V_K$ quasi-everywhere on $K$".
