---
id: lem-nonarchimedean-tate-zeta-integral-and-fourier-functional-equation
kind: lemma
title: "Nonarchimedean Tate zeta integrals and the Fourier functional equation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-left-haar-integral-and-left-haar-measure
proof_strategy: direct
axiom_use: "No choice premise. Haar measures are the given local-integral data; their normalization, Fourier identity, rationality, uniqueness and finite Gauss nonvanishing are proved. No cohomology, local reciprocity or higher-dimensional epsilon-factor input."
sources:
  references:
    - title: "Dongwen Liu, Feng Su and Binyong Sun, Rankin–Selberg Integrals for Principal Series Representations of GL(n)"
      url: "https://arxiv.org/pdf/2109.05271v1"
      locator: "§2, displayed equation (3), Tate local functional equation with the positive Fourier kernel."

---

## Statement

Let $K$ be a complete discretely valued field with finite residue field of cardinality $q$, valuation ring $O$, uniformizer $\pi$, and $|\pi|=q^{-1}$. Let $\psi:K\to S^1$ be a nontrivial continuous additive character and let $\chi:K^\times\to\mathbb C^\times$ be a continuous character. Haar measures on the additive and multiplicative groups are the given local-integral data. Write $c\in\mathbb Z$ for the least integer such that $\psi$ is trivial on $\pi^cO$. Rescale the additive Haar measure to $\operatorname{vol}(O)=q^{c/2}$ and the multiplicative Haar measure to $\operatorname{vol}(O^\times)=1$. Both normalizations exist. Let $\mathcal S(K)$ be the locally constant compactly supported complex functions, and put
$$\widehat\phi(y)=\int_K\phi(x)\psi(xy)\,dx,\qquad Z(s,\chi,\phi)=\int_{K^\times}\phi(x)\chi(x)|x|^s\,d^\times x.$$
Then $\widehat\phi\in\mathcal S(K)$, $\widehat{\widehat\phi}(x)=\phi(-x)$, and $Z(s,\chi,\phi)$ converges absolutely for $\operatorname{Re}s>\log_q|\chi(\pi)|$. Set
$$L(s,\chi)=\begin{cases}(1-\chi(\pi)q^{-s})^{-1},&\chi|_{O^\times}=1,\\1,&\chi|_{O^\times}\ne1.\end{cases}$$
The quotient $Z(s,\chi,\phi)/L(s,\chi)$ is a Laurent polynomial in $q^{-s}$, and there is a unique nonzero Laurent monomial $\epsilon(s,\chi,\psi)$, independent of $\phi$, such that meromorphically for every $s\in\mathbb C$ and $\phi\in\mathcal S(K)$,
$$\frac{Z(1-s,\chi^{-1},\widehat\phi)}{L(1-s,\chi^{-1})}=\epsilon(s,\chi,\psi)\frac{Z(s,\chi,\phi)}{L(s,\chi)}.$$
More explicitly, put $\alpha=\chi(\pi)$ and $U_a=1+\pi^aO$ for $a\ge1$, with $U_0=O^\times$. If $\chi|_{O^\times}=1$, then
$$\epsilon(s,\chi,\psi)=\alpha^{-c}q^{c(s-1/2)}.$$
Otherwise let $a\ge1$ be least with $\chi|_{U_a}=1$, and define
$$\tau=\sum_{u\in(O/\pi^aO)^\times}\chi(u)^{-1}\psi(\pi^{c-a}u).$$
This finite sum is representative-independent, $|\tau|^2=q^a$, and
$$\epsilon(s,\chi,\psi)=\frac{\tau}{q^{a/2}}\,\alpha^{a-c}q^{(a-c)(1/2-s)}.$$
The functional equation is unchanged by any constant rescaling of $d^\times x$. No restriction on the characteristic of $K$ or on the residue prime, including $2$, is imposed.

## Statement references

[Liu–Su–Sun, §2, equation (3)](https://arxiv.org/pdf/2109.05271v1) records the scalar Tate equation with the positive Fourier kernel. The finite local proof and normalization below are reconstructed directly; no Tate theorem is imported as a proof input.

## Facts & Assumptions

**Given:** Exactly the valued field, characters and Haar measures in the Statement. Existence of a Haar measure is not inferred from this lemma; such measures are already fixed in the local-integral definitions to which it applies. Every analytic assertion displayed above is to be proved.

[F1] The local-field data mean a complete discretely valued field with $O=\{v\ge0\}$, residue field of cardinality $q$, and $\pi$ of valuation1. [[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[F2] A given Haar measure is nonzero and translation-invariant, is a countably additive Borel measure, and is finite on compact subsets. Complex integration extends real integration by its real and imaginary parts. [[def-left-haar-integral-and-left-haar-measure]]

## Proof

**Proof technique:** finite Fourier sums and multiplicative-equivariant linear functionals.

1.1 The complex multiplicative group has a neighborhood of1 containing no nontrivial subgroup, for example $D=\{z:|z-1|<1/2\}$. Indeed if all integral powers of $z$ stay in $D$, their bounded moduli force $|z|=1$. For $z=e^{i\theta}\ne1$, choose the least positive integer whose multiple of $|\theta|$ reaches $\pi/3$; either $z$ is already outside $D$, or that power has angle between $\pi/3$ and $2\pi/3$ and lies outside $D$. Continuity therefore makes $\psi$ trivial on some additive ideal $\pi^bO$ and $\chi$ trivial on some subgroup $U_a$. Nontriviality of $\psi$ bounds its admissible ideal exponents below, so $c$ exists as a least integer. The least unit-conductor $a$ also exists, with $a=0$ denoting triviality on $O^\times$. The quotient $O^\times/U_a$ is finite by the finite residue filtration, so $\chi$ takes roots of unity, hence modulus1, on $O^\times$. Only finite selections and least integers were used. [given, F1, algebra]

1.2 Fix one finite ordered list of residue representatives. It gives $q^m$ representatives of $O/\pi^mO$ by finite digit polynomials. To prove $O$ compact without any product-choice theorem, suppose an open cover has no finite subcover. At each depth take the least residue subball still having no finite subcover; one exists because finitely many finitely covered children would cover the parent. The resulting canonical nested residue balls determine a Cauchy sequence of digit polynomials. Its limit exists by completeness and lies in every such ball. An open cover member containing that limit contains one of these subballs, contradicting its choice. Thus $O$ is compact, and so is its clopen subset $O^\times=O\setminus\pi O$. Their given additive and multiplicative Haar masses respectively are finite and positive: if the additive mass of $O$ were zero, the countable union $K=\bigcup_{m\ge0}\pi^{-m}O$ would have zero mass, since each member is a finite union of translates of $O$. If the multiplicative mass of $O^\times$ were zero, the countable union $K^\times=\bigcup_{m\in\mathbb Z}\pi^mO^\times$ would have zero mass. Both contradict nonzeroness in [F2]. Hence the prescribed rescalings exist. Write $V=q^{c/2}$. Finite residue partitions and translation invariance give additive volume $Vq^{-m}$ to every ball of radius $\pi^mO$, also for negative $m$. The multiplicative unit annuli have volume1, and each $U_m$-coset in $O^\times$ has mass $1/[O^\times:U_m]$. [given, F1, F2, construct]

2.1 The annihilator of $\pi^mO$ under $(x,y)\mapsto\psi(xy)$ is $\pi^{c-m}O$. If $v(y)+m<c$, then $y\pi^mO$ is an ideal strictly larger than $\pi^cO$, on which $\psi$ is not trivial, proving the reverse inclusion. A compactly supported locally constant function is a finite linear combination of ball indicators: a finite constant-ball cover of its compact support and a common sufficiently fine level give a finite disjoint partition. Translation of a ball integral then gives $\widehat{\mathbf1_{b+\pi^mO}}(y)=Vq^{-m}\psi(by)\mathbf1_{\pi^{c-m}O}(y)$; outside the annihilator translate by a point with nontrivial character to force the integral to zero. The character is locally constant by step 1.1, so each transform is again locally constant and compactly supported. Applying the formula a second time gives $V^2q^{-c}\mathbf1_{-b+\pi^mO}(x)=\mathbf1_{-b+\pi^mO}(x)$. Linearity proves Schwartz preservation and Fourier inversion for every $\phi$. Checking the same ball formula under $\phi_b(x)=\phi(bx)$ gives $\widehat{\phi_b}(y)=|b|^{-1}\widehat\phi(y/b)$. This uses only the finite ball-volume formulas, not a Haar uniqueness or general Fourier theorem. [given, F1, F2, step 1.1, step 1.2, algebra]

3.1 Put $\alpha=\chi(\pi)$ and $z=q^{-s}$. Compact support gives $\phi=0$ on annuli $\pi^mO^\times$ for $m<M$, while local constancy at0 gives $\phi(\pi^mu)=\phi(0)$ for all $u\in O^\times$ and $m\ge N$. The integral on each intervening annulus is finite, since a common finite unit-congruence partition makes both $\phi(\pi^mu)$ and $\chi(u)$ constant. The unit average of $\chi$ is1 if $a=0$ and0 otherwise, by translating by a unit of nontrivial character. Thus $Z(s,\chi,\phi)$ is a finite Laurent polynomial in $z$, plus only in the unramified case the tail $\phi(0)(\alpha z)^N/(1-\alpha z)$. Absolute convergence follows for $\operatorname{Re}s>u:=\log_q|\alpha|$ from the geometric majorant; the disjoint-annulus integral is that scalar series by countable additivity. Multiplication by $1-\alpha z$ in the unramified case proves the asserted Laurent-polynomial quotient. Apply the same argument to $\widehat\phi$ and $\chi^{-1}$: both original Mellin integrals converge on the nonempty common strip $u<\operatorname{Re}s<1+u$. [given, F2, step 1.1, step 1.2, step 2.1, algebra]

4.1 Fix $s$ in that strip. The two linear functionals $T(\phi)=Z(s,\chi,\phi)$ and $T'(\phi)=Z(1-s,\chi^{-1},\widehat\phi)$ satisfy $T(\phi_b)=\chi(b)^{-1}|b|^{-s}T(\phi)$ and the identical equation for $T'$, by multiplicative Haar invariance and the Fourier scaling formula. Any functional with this covariance on $\mathcal S(K^\times)$ is a scalar multiple of $T$. To prove it, choose $m$ with $\chi|_{U_m}=1$. Every compact locally constant test function away0 is a finite sum of indicators of cosets $bU_l$ for a sufficiently large $l\ge m$: its annular range is finite and its unit-congruence partition is finite. Covariance determines its value on each coset from its value on $\mathbf1_{U_l}$. Subdividing $U_m$ into its finitely many $U_l$-cosets shows that the ratio of this value to the Haar mass of $U_l$ is independent of $l$, since $\chi$ and $|\cdot|$ are trivial on $U_m$. This proves the proportionality on $K^\times$ directly. [given, F2, step 2.1, step 3.1, construct]

4.2 Suppose $a\ge1$, and take $\phi(x)=\chi(x)^{-1}\mathbf1_{O^\times}(x)$, whose Mellin integral is1. Put $R=O/\pi^aO$ and $\Psi(t)=\psi(\pi^{c-a}t)$. Both $\chi$ on units and $\Psi$ are well-defined on the indicated residue classes. The function $\phi$ is invariant under additive $\pi^aO$-translation, so the ball transform of step 2.1 gives support in $\pi^{c-a}O$. Its value at $y=\pi^{c-a}v$ is $Vq^{-a}F(v)$, where $F(v)=\sum_{u\in R^\times}\chi(u)^{-1}\Psi(vu)$. If $v$ is a unit, substitution gives $F(v)=\chi(v)\tau$. If $v$ is a nonunit, choose a unit $b\in U_{a-1}$ with $\chi(b)\ne1$, where $U_0=O^\times$. Multiplication by $b$ fixes every additive phase because $v(b-1)\in\pi^aO$ modulo the scaled conductor: its valuation is at least $1+(a-1)=a$. Substitution therefore gives $F(v)=\chi(b)F(v)$, so $F(v)=0$. Thus on $\pi^{c-a}O^\times$ the transform equals $G\chi(v)$, with $G=Vq^{-a}\tau$, and it vanishes elsewhere. [given, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 For either conductor case, a linear functional $D$ on $\mathcal S(K)$ vanishing on $\mathcal S(K^\times)$ has the form $D(\phi)=d\phi(0)$. Indeed subtract $\phi(0)$ times the indicator of a sufficiently small ball at0; the difference vanishes near0 and has compact support away0. The difference of two such ball indicators also has support away0, so their $D$-values are the same constant $d$. But this functional has trivial scaling, whereas the covariance factor at $b=\pi$ is $(\alpha q^{-s})^{-1}\ne1$ on the common strip. Consequently $T'$ is a scalar multiple of $T$ on all of $\mathcal S(K)$, with no delta-at-zero ambiguity. No extension theorem for distributions or choice of linear complements has been used. [given, step 3.1, step 4.1, algebra]

5.2 Continue the ramified case of step 4.2. The additive pairing $\Psi(xy)$ on $R$ is nondegenerate. For a nonzero $t\in R$ of valuation $d<a$, multiplication by $t$ reaches the ideal $\pi^dO/\pi^aO$, and multiplication further by $\pi^{a-d-1}$ reaches the last conductor layer, where the additive character is nontrivial by the definition of $c$. Hence some $x$ has $\Psi(xt)\ne1$. Translating the finite sum over $x\in R$ gives $\sum_x\Psi(xt)=0$ for $t\ne0$, and $q^a$ for $t=0$. Expand the finite square and apply this equality to obtain $\sum_{v\in R}|F(v)|^2=q^a\sum_{u\in R^\times}|\chi(u)|^{-2}=q^a|R^\times|$. By step 4.2 the left side is $|R^\times||\tau|^2$, since unit character values have modulus1. As $|R^\times|=q^a-q^{a-1}>0$, cancellation proves $|\tau|^2=q^a$. This proves primitive Gauss nonvanishing and its size without importing a Gauss-sum theorem. [given, step 1.1, step 4.2, algebra]

6.1 If $a=0$, take $\phi=\mathbf1_O$. Step 3.1 gives $T(\phi)=L(s,\chi)$, while step 2.1 gives $\widehat\phi=V\mathbf1_{\pi^cO}$. Therefore $T'(\phi)=V\alpha^{-c}q^{-c(1-s)}L(1-s,\chi^{-1})$. The factor $V=q^{c/2}$ gives the asserted $\epsilon=\alpha^{-c}q^{c(s-1/2)}$, which is a nonzero Laurent monomial. By step 5.1 this normalized functional equation holds for every test function on the common strip. [given, step 2.1, step 3.1, step 5.1, algebra]

7.1 In the ramified case $L(s,\chi)=L(1-s,\chi^{-1})=1$. The single annulus in step 4.2 gives $T'(\phi)=G\alpha^{a-c}q^{(a-c)(1-s)}$. With $G=q^{c/2-a}\tau$ this is $(\tau/q^{a/2})\alpha^{a-c}q^{(a-c)(1/2-s)}$. It is nonzero by step 5.2, and step 5.1 proves the equation for every test function on the common strip. In both cases all terms are rational in $z=q^{-s}$ by step 3.1. Clearing denominators, their equality for the infinitely many $z$ in the common-strip annulus makes a polynomial vanish identically, so the equation holds meromorphically for every $s$. A nonzero test Mellin integral, namely $L(s,\chi)$ or1 in the two cases, proves uniqueness of the scalar and its independence from temporary residue representatives or uniformizer choices. Multiplying $d^\times x$ by a constant multiplies both Mellin functionals by that constant and leaves the equation unchanged. Zero test functions, every integer $c$, all conductor endpoints, all residue primes and both characteristics have been included. Only scalar Tate factors, not Deligne induction factors, LLC or higher-rank local integrals, are constructed. [given, step 3.1, step 5.1, step 6.1, step 4.2, step 5.2, algebra] ∎

## Reading limits

The actual cached Liu–Su–Sun §2 display (3) and its surrounding measure/character conventions were read to identify the established scalar statement and positive Fourier kernel. The full finite-ball, rationality, functional-uniqueness and Gauss arguments are proved above. The original Tate thesis is attribution as cited there; no new retrieval or full reading of that original proof is claimed. No existing provider proof was re-reviewed.
