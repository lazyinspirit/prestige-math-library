---
id: thm-the-integral-lkb-module-is-free-of-rank-n-choose-two
kind: theorem
title: The integral LKB module is free of rank n choose two
status: published
origin: pipeline
deps: [lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank, lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors, lem-fraction-field-coefficients-of-an-integral-lkb-class-are-laurent-polynomials, def-lawrence-krammer-bigelow-cover, lem-int-cancellation, cor-polynomial-ring-over-a-domain-is-a-domain, def-multiplicative-subset-and-localisation]
justified_by: []
aliases: []
dependency_level: 9
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Theorem 4.1 with Lemmas 4.3-4.6, printed pp. 8-12; section 4.2, printed pp. 12-13 (fraction-field isomorphism, and the Paoluzzi-Paris result that V and H_2(C-tilde) are not isomorphic for n>=3)"
    - title: "Krammer, Braid groups are linear, Ann. of Math. 155 (2002) 131-156"
      url: "https://arxiv.org/pdf/math/0405198"
      locator: "Section 3, printed pp. 139-142: the free matrix module V with basis x_{ij} and the half-twist identity of Lemma 3.2"
    - title: "Paoluzzi and Paris, A note on the Lawrence-Krammer-Bigelow representation, Algebr. Geom. Topol. 2 (2002) 499-518"
      url: "https://msp.org/agt/2002/2-1/agt-v2-n1-p24-p.pdf"
      locator: "Sections 3-4, printed pp. 507-516: the absolute cellular differential, E cycles and seven-case action; fixed-parameter nonisomorphism for n=3 is completed locally"
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for thm-the-integral-lkb-module-is-free-of-rank-n-choose-two and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-16; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"f8cd657a0a808f46bec248cefad22640846cfded779523f2d3aa7e3b11569304","evidence":["research/frontier-38-owner-30-reader-16.md","research/frontier-38-owner-30-reader-findings-16.json","research/frontier-38-owner-30-dispatch/reader-reader-16.result.json","research/frontier-38-owner-30-step5-hash-16-post-5a.json","research/frontier-38-owner-30-alpha-batch-16-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-16.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/thm-the-integral-lkb-module-is-free-of-rank-n-choose-two.md","historical_raw_sha256":"bd9670ae218129d74c81df556798461eeba4ba99609721b15393a1173a98efc2","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:46:55.326Z"}}
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Statement

Let $n\ge2$, let $\Lambda=\mathbb Z[q^{\pm1},t^{\pm1}]$ and let
$\widetilde C\to C$ be the LKB cover of
[[def-lawrence-krammer-bigelow-cover]]. Then $H_2(\widetilde C;\mathbb Z)$ is
a free $\Lambda$-module of rank $\binom n2$. Explicitly, the closed surfaces
$v_{i,j}$ ($1\le i<j\le n$) of
[[lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors]],
whose images in $H_2(\widetilde C,\tilde\nu)$ are
$$(1-q)^2(1+qt)(1-t)v'_{i,i+1}\ (j=i+1),\qquad (1-q)^2(1+qt)v'_{1,3}\ ((i,j)=(1,3)),\qquad (1-q)^2v'_{i,j}\ (\text{otherwise}),$$
form a $\Lambda$-basis of $H_2(\widetilde C;\mathbb Z)$. Here $v'_{i,j}$ are
the relative squares and triangles of that lemma.

For $n\ge3$ the integral module $H_2(\widetilde C;\mathbb Z)$ and Krammer's
free matrix module $V=\bigoplus_{i<j}\Lambda x_{i,j}$ are isomorphic only
after extending scalars to $\mathbb Q(q,t)$; they are not isomorphic as $\Lambda[B_n]$-modules (with the fixed parameter convention), although their underlying free $\Lambda$-modules are isomorphic,
and no integral identification of the two bases is asserted.

## Facts & Assumptions

**Given:** the LKB cover $\widetilde C$, the ring $\Lambda=\mathbb Z[q^{\pm1},t^{\pm1}]$, the field $K=\mathbb Q(q,t)$, the closed surfaces $v_{i,j}$ and dual classes $x_{i,j}$ of [[lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors]] and the coefficient statement of [[lem-fraction-field-coefficients-of-an-integral-lkb-class-are-laurent-polynomials]].

[F1] [[lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank]]: the natural map $H_2(\widetilde C;\mathbb Z)\to K\otimes_\Lambda H_2(\widetilde C;\mathbb Z)$ is injective and $K\otimes_\Lambda H_2(\widetilde C;\mathbb Z)$ has dimension $\binom n2$ over $K$.

[F2] [[lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors]]: the closed surfaces $v_{i,j}$ have the displayed images in $H_2(\widetilde C,\tilde\nu)$, and the matrix $\bigl(\langle v'_{i',j'},x_{i,j}\rangle'\bigr)$ of primed pairings is triangular with diagonal entries that are units of $\Lambda$; hence it is invertible after extending scalars to $K$.

[F3] [[lem-fraction-field-coefficients-of-an-integral-lkb-class-are-laurent-polynomials]]: if $c_{i,j}\in K$ and $v=\sum_{i<j}c_{i,j}v_{i,j}$ lies in $H_2(\widetilde C;\mathbb Z)\subseteq K\otimes_\Lambda H_2(\widetilde C;\mathbb Z)$, then $c_{i,j}\in\Lambda$ for all $i<j$.

[F4] Bigelow 2002 Section4.2 identifies the fraction-field representations, with $t_{\mathrm{Krammer}}=-t_{\mathrm{Bigelow}}$. Paoluzzi–Paris Section4, Lemma4.5 and Proposition4.6, realize that matrix representation integrally as $L=\sum_{i<j}\Lambda E_{ij}$ inside the absolute cellular kernel of [F1], with $q,t$ the fixed deck parameters. Here $S=(t-1)(qt+1)$ and
$$E_{ij}=SA_{ij}+(q-1)V_{ib}+(q-1)V_{ja}+\sum_{i<k<j}(q-1)^2V_{k0},$$
$$V_{ib}=-qtB_{i1}+q(t-1)B_{i2}+B_{i3},\quad V_{ia}=B_{i1}+q(t-1)B_{i2}-qtB_{i3},\quad V_{i0}=-tB_{i1}+(t-1)B_{i2}-tB_{i3}.$$
These are the explicit cycles in [F1]'s proof4.1. Reading the cellular half-twist images (the source's complete cell-image formulas in Lemma4.5) and substituting these cycles gives
$$\sigma_kE_{ij}=\begin{cases}qE_{i-1,j}+(1-q)E_{ij}&k=i-1,\\ E_{i+1,j}-qt(q-1)E_{k,k+1}&k=i<j-1,\\-q^2tE_{k,k+1}&k=i=j-1,\\ E_{ij}-t(q-1)^2E_{k,k+1}&i<k<j-1,\\ E_{i,j-1}-qt(q-1)E_{k,k+1}&i<j-1=k,\\qE_{i,j+1}+(1-q)E_{ij}&k=j,\\E_{ij}&\text{otherwise}.\end{cases}$$
The coefficient ring is fixed; no parameter-changing automorphism is allowed in the comparison below. The displayed action is the matrix lattice of the source, expressed in its cellular $E$ basis; its fixed-parameter identification with the Krammer basis includes the stated sign translation, not a plain-module nonisomorphism claim.


[F5] The integers have no zero divisors ([[lem-int-cancellation]]), polynomial extension preserves this property ([[cor-polynomial-ring-over-a-domain-is-a-domain]]), and localization is the fraction construction of [[def-multiplicative-subset-and-localisation]]. Localizing $\mathbb Z[t]$ or $\mathbb Z[t,q]$ at powers of the variables gives the Laurent domains $\mathbb Z[t^{\pm1}]$ and $\Lambda$: the denominators are nonzero monomials, so clearing them preserves both equality and nonzero products.

## Proof

1.1 The classes $v_{i,j}$ are $K$-linearly independent. Extend the primed pairing of [F2] to $K\otimes_\Lambda H_2(\widetilde C,\tilde\nu)\times K\otimes_\Lambda H_2(\widetilde C,\partial\widetilde C)$ by $K$-sesquilinearity. Its matrix $\bigl(\langle v'_{i',j'}, x_{i,j}\rangle'\bigr)$ with respect to the dual classes is triangular with unit diagonal by [F2], hence invertible over $\Lambda$ and over $K$. The pairing matrix for the actual absolute cycles $v_{i,j}$ is this primed matrix with each row multiplied by its displayed nonzero closing factor $(1-q)^2$, $(1-q)^2(1+qt)$, or $(1-q)^2(1+qt)(1-t)$. These factors are not asserted to be Laurent units; they are invertible over $K$, so the actual matrix remains invertible over $K$. If $\sum_{i<j}c_{i,j}v_{i,j}=0$ with $c_{i,j}\in K$, pairing the relation with each $x_{i,j}$ and applying invertibility gives $c_{i,j}=0$ for all $i<j$. Since the $v_{i,j}$ lie in the image of $H_2(\widetilde C;\mathbb Z)$ and by [F1] that image spans a subspace of dimension $\binom n2$, which equals the number of pairs $(i,j)$, the classes $v_{i,j}$ form a $K$-basis of $K\otimes_\Lambda H_2(\widetilde C;\mathbb Z)$. [F1, F2, algebra]

1.2 *The rational comparison and cyclic lattice.* By [F4], $K\otimes_\Lambda H_2$ and the Krammer matrix representation are isomorphic as $B_n$-representations, and the latter has integral realization $L=\bigoplus_{i<j}\Lambda E_{ij}$ in the cellular kernel. The parameter match is explicit: set $x_{ij}=q^{1-i}E_{ij}$ and $t_{\mathrm{Krammer}}=-t$. This is a diagonal Laurent-unit basis change. Substitution in the seven displayed cases gives the Krammer table: for $k=i$ the next-row coefficient becomes $q$ and the adjacent coefficient becomes $t_{\mathrm{Krammer}}q(q-1)$; for $k=j-1$ the adjacent exponent becomes $q^{j-i}$; in the interior it becomes $q^{k-i}$; for $k=i-1$ the previous-row coefficient becomes1; for $k=j$ the next-column coefficient remains$q$; for an adjacent pair the eigenvalue is $t_{\mathrm{Krammer}}q^2$; all other basis vectors are fixed. Thus the integral realization is the specified Krammer matrix lattice with exactly its frozen sign translation, not an unspecified rational basis change. The $E$ cycles have only one nonzero $A$ coordinate, namely $S$ in coordinate $(i,j)$, so are independent. They are generated over $\Lambda[B_n]$ by $E_{12}$: the $k=j$ formula builds $E_{1,j+1}=q^{-1}(\sigma_j-(1-q))E_{1j}$ along the first row; the $k=i<j-1$ formula then builds row $i+1$ from row $i$ and its already known adjacent element. Induction gives every pair. [F1, F4, algebra]

2.1 The classes $v_{i,j}$ span $H_2(\widetilde C;\mathbb Z)$ over $\Lambda$. Let $v\in H_2(\widetilde C;\mathbb Z)$. By step 1.1 write $v=\sum_{i<j}c_{i,j}v_{i,j}$ with $c_{i,j}\in K$. Since $v$ is integral, [F3] gives $c_{i,j}\in\Lambda$ for all $i<j$. Hence $v$ is a $\Lambda$-linear combination of the $v_{i,j}$. [F3, step 1.1, algebra]

2.2 *A fixed-parameter equivariant map cannot be surjective.* For $n\ge3$, the action of $\sigma_1$ on $K\otimes H_2$ has the eigenvalue $-q^2t$ on $E_{12}$. Modulo this line, each span of $E_{1j},E_{2j}$, $j\ge3$, has matrix with characteristic polynomial $(X-1)(X+q)$, and the remaining $E_{ij}$ with $i\ge3$ are fixed. Since $-q^2t$ differs from $1,-q$ as a rational function, its eigenspace is exactly $KE_{12}$. Any fixed-parameter $\Lambda[B_n]$-isomorphism from $L$ onto $H_2$ must therefore send $E_{12}$ to $\lambda E_{12}$ for $\lambda\in K$. In integral cellular coordinates the $A_{12}$ and $B_{13}$ entries of this image are $\lambda(t-1)(qt+1)$ and $\lambda(q-1)$. They belong to $\Lambda$. Set $A=\lambda(q-1)$ and $B=\lambda(t-1)(qt+1)$ in $\Lambda$. Then $A(t-1)(qt+1)=B(q-1)$. Evaluate $q=1$ into the Laurent domain $\mathbb Z[t^{\pm1}]$ of [F5]: the factor $(t-1)(t+1)$ is nonzero, so $A(1,t)=0$. The kernel of this evaluation is $(q-1)$: multiply a Laurent polynomial by a sufficiently large power of $q$, then use the finite identities $q^r-1=(q-1)(1+\cdots+q^{r-1})$ to subtract its value at1. Hence $A=(q-1)C$ for $C\in\Lambda$, and cancellation in $K$ gives $\lambda=C\in\Lambda$. This proves the needed denominator removal directly, without asserting an undeclared UFD theorem. Cyclic generation from step 1.2 forces the entire image into $L$. [F1, F4, F5, step 1.2, algebra]

3.1 Freeness and rank. A $\Lambda$-linear relation $\sum_{i<j}\lambda_{i,j}v_{i,j}=0$ with $\lambda_{i,j}\in\Lambda\subseteq K$ is in particular a $K$-linear relation, so step 1.1 gives $\lambda_{i,j}=0$. Together with step 2.1 this shows that $\{v_{i,j}\}$ is a $\Lambda$-basis of $H_2(\widetilde C;\mathbb Z)$; in particular the module is free of rank $\binom n2$. The displayed relative images of the basis elements are exactly those recorded in [F2]. [F2, step 1.1, step 2.1, algebra]

4.1 *The integral kernel is strictly larger.* Define $$X_{13}=(qt+1)(A_{12}+A_{23}-A_{13})-(q-1)B_{21}+(q^2-1)B_{22}-(q-1)B_{23}.$$ Substituting [F1]'s absolute differential gives zero: the $A$ part contributes $(q-1)(qt+1)(a_2-b_2)$, The $B$ part is $(q-1)(-dB_{21}+(q+1)dB_{22}-dB_{23})$. Its $a_2$ coefficient inside the parentheses is $-(1-t)-(q+1)t=-(1+qt)$ and its $b_2$ coefficient is $(q+1)t-(t-1)=1+qt$; the $c_2,c_3$ coefficients are $1-(q+1)+q=0$ and $-q+(q+1)-1=0$. Thus it is the negative of the $A$ contribution. There are no degree-three boundaries, so $X_{13}\in H_2$. If it lay in $L$, its $A_{13}$ coordinate would force its $E_{13}$ coefficient to equal $-(qt+1)/S=-1/(t-1)$, which is not in $\Lambda$. Hence $X_{13}\notin L$ for every $n\ge3$. Step 2.2 rules out an equivariant isomorphism onto $H_2$. This proves the fixed-parameter nonisomorphism, including $n=3$; it does not rely on the source's stronger parameter-twisted maximality statement whose $n=3$ argument was left to the reader. Both underlying modules are free of the same rank, so are abstractly $\Lambda$-isomorphic by sending one finite basis to the other. [F1, F4, step 1.2, step 2.2, step 3.1, algebra] ∎

