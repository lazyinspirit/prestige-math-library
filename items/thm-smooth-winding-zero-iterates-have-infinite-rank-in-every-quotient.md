---
id: thm-smooth-winding-zero-iterates-have-infinite-rank-in-every-quotient
kind: theorem
title: Smooth winding-zero iterates have infinite rank in every successive quotient
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-smooth-slice-iff-concordant-to-unknot
  - thm-smooth-integral-filtration-is-compatible-with-deep-axis-infection
  - thm-finite-cyclic-extensions-over-integral-half-solutions-have-zero-defect
  - thm-finite-prime-smooth-infection-obstructions-use-actual-coefficients
  - lem-finite-prime-families-have-explicit-separating-knot-signature-bumps
  - thm-canonical-finite-cyclic-knot-defects-equal-seifert-signature-averages
  - thm-smooth-group-signature-defects-are-independent-and-uniformly-bounded
  - lem-standard-infection-cobordisms-have-boundary-generated-second-homology
  - thm-excision-and-mayer-vietoris-with-local-coefficients
  - thm-topological-finite-projective-l2-duality-and-boundary-gluing
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Cha and Kim, Iterated satellite operators on the knot concordance group
      url: https://arxiv.org/pdf/2402.04629v2
      locator: TheoremsA/B and printed8–14; the integral-filtration, finite-prime n=0, and rational-rank steps are supplied locally
---

## Statement

Assume AC. Let $P$ be a smooth winding-zero pattern whose axis has nonzero integral classical Blanchfield self-pairing in the Alexander module of $P(U)$. Let $\mathcal C_{\mathrm{sm}}$ denote smooth oriented knot concordance with its reverse-mirror inverse, and let $P^0$ be the identity. Then for every $n\ge0$ the abelian-group quotient
$$\langle P^n(\mathcal C_{\mathrm{sm}})\rangle/\langle P^{n+1}(\mathcal C_{\mathrm{sm}})\rangle$$
has infinite rational rank. For every $n\ge1$ the smooth satellite map $P^n$ is not a group homomorphism. The proof uses finite companion families depending on a prescribed rank bound; no infinite choice of an explicit independent sequence is required. No coprime Alexander-polynomial condition is imposed. This theorem retains full AC and makes no assertion identifying nonsmooth TOP defects with smooth bounding invariants.

## Facts & Assumptions

**Given:** AC and the indicated smooth pattern, axis and finite smooth peripheral data.

[A1] [[def-axiom-of-choice]] is the standing hypothesis of the geometric and analytic suppliers.

[F1] A smooth knot represents zero in concordance exactly when it bounds a smooth proper disk. [[lem-smooth-slice-iff-concordant-to-unknot]] Smooth satellite maps preserve concordance; the integral solution sets $\mathcal F_h^{\mathrm{sm}}$ are nested subgroups; every smooth knot has an integral $0$-solution; and $\langle P^k(\mathcal C_{\mathrm{sm}})\rangle\subseteq\mathcal F_k^{\mathrm{sm}}+\langle[P^k(U)]\rangle$ for $k\ge1$. [[thm-smooth-integral-filtration-is-compatible-with-deep-axis-infection]]

[F2] The explicit normal-cover and finite-partition argument constructs actual abelianization maps to the circle on compact manifolds with integral first homology $\mathbb Z$. A smooth integral $1$-solution has zero actual finite-cyclic defect for every meridian projection to $C_p$, hence its boundary $\rho_{\mathrm{sm}}$ is zero. [[thm-finite-cyclic-extensions-over-integral-half-solutions-have-zero-defect]]

[F3] For every $n\ge1$ and $m\ge1$ there is a finite family $J_i$ such that no nonzero signed sum of their $P^n$ iterates has an actual smooth integral $(n+1/2)$-solution. There is also an actual nonslice difference $P^n(J)\#P^n(J)\#(-P^n(J\#J))$. [[thm-finite-prime-smooth-infection-obstructions-use-actual-coefficients]]

[F4] For any finite distinct odd primes, chosen finite disk-band companion surfaces have positive own-prime means $D_i=4N_i/p_i$ and zero other selected-prime means. Their actual finite-cyclic smooth defects equal those normalized means, by evaluation on the supplied canonical cyclic bounds and smooth independence. [[lem-finite-prime-families-have-explicit-separating-knot-signature-bumps]], [[thm-canonical-finite-cyclic-knot-defects-equal-seifert-signature-averages]], [[thm-smooth-group-signature-defects-are-independent-and-uniformly-bounded]]

[F5] Standard smooth connected-sum pieces have their actual product spines and ordinary boundary-generated second homology. The local coefficient Mayer–Vietoris sequence holds, whole-component $L^2$ and ordinary signatures are additive, and the actual smooth multi-boundary defect identity follows by gluing smooth bounds and using the closed smooth equality. [[lem-standard-infection-cobordisms-have-boundary-generated-second-homology]], [[thm-excision-and-mayer-vietoris-with-local-coefficients]], [[thm-topological-finite-projective-l2-duality-and-boundary-gluing]], [[thm-finite-prime-smooth-infection-obstructions-use-actual-coefficients]]

## Proof

**Given:** The data in the Statement, and write $\mathcal C=\mathcal C_{\mathrm{sm}}$.

1.1 First establish the finite-cyclic connected-sum identity on the actual coefficients. In a standard joining piece its common solid torus has meridian circle with coefficient $g$. Each incoming knot-surgery restriction is its abelianization followed by $\mu\mapsto g$. The meridian map $S^1\to M(K)$ has a left homotopy inverse $M(K)\to S^1$ given by integral abelianization, with pulled-back coefficients precisely these cyclic coefficients. Therefore $H_1(S^1;\mathbb CG)\to H_1(M(K);\mathbb CG)$ is injective, even if $g$ has finite order. Since the solid torus has no $H_2$, the spine Mayer–Vietoris sequence makes the actual incoming boundary maps generate $H_2$ of the joining piece. The cap/pair exact sequence puts every such image in the intersection radical, so the whole form and its signature are zero. Its ordinary signature is zero by [F5]. Iterating the finitely many joins proves zero defect for a signed connected-sum piece; negative components use orientation reversal. Applying [F5]'s actual multi-boundary smooth identity gives $$\rho_{\mathrm{sm}}\bigl(M(\#_i a_iK_i),\mu\mapsto1\bmod p\bigr)=\sum_i a_i\rho_{\mathrm{sm}}\bigl(M(K_i),\mu\mapsto1\bmod p\bigr).$$ This does not use an infinite-order meridian assumption or a Definition as a homomorphism proof. [F4, F5, given, construct, algebra]

2.1 For $n=0$, fix any finite $m\ge1$, choose distinct odd primes $p_1,\ldots,p_m$, and use [F4] with any positive heights. If a nonzero signed sum $K=\#_i a_iJ_i$ lay in $\mathcal F_1^{\mathrm{sm}}$, choose an index $j$ with $a_j\ne0$ and use its actual abelianized $C_{p_j}$ map on an integral $1$-solution. By [F2] its boundary rho is zero. But step 1.1 and [F4] make that number exactly $a_jD_j\ne0$, since every cross-prime mean vanishes. Thus the $m$ classes of the $J_i$ are integrally independent modulo $\mathcal F_1^{\mathrm{sm}}$. They are rationally independent after tensoring too: a rational relation clears denominators to an integral relation whose class is torsion, and multiplication by its finite order would be a nonzero integral relation modulo this subgroup. Consequently $\mathcal C/\mathcal F_1^{\mathrm{sm}}$ has rational rank at least $m$ for every finite $m$. [F1, F2, F4, step 1.1, construct, algebra]

3.1 For $n\ge1$, fix any $m$ and take [F3]'s finite family. An integral $(n+1)$-solution is an integral $(n+1/2)$-solution by [F1]. Hence a nonzero signed sum of these iterates cannot belong to $\mathcal F_{n+1}^{\mathrm{sm}}$. The same denominator and torsion-clearing argument as in step 2.1 shows that their images are rationally independent in $\mathcal C/\mathcal F_{n+1}^{\mathrm{sm}}$. Thus, for every $n\ge0$, if $H_n=\langle P^n(\mathcal C)\rangle$, its image in $\mathcal C/\mathcal F_{n+1}^{\mathrm{sm}}$ has infinite rational rank, using step 2.1 when $H_0=\mathcal C$. [F1, F3, step 2.1, algebra]

4.1 We supply the final group calculation explicitly. Set $a=[P^{n+1}(U)]$ and $F=\mathcal F_{n+1}^{\mathrm{sm}}$. By [F1], $H_{n+1}\subseteq F+\langle a\rangle$. Also $H_{n+1}\subseteq H_n$: the set $P^{n+1}(\mathcal C)=P^n(P(\mathcal C))$ is a subset of $P^n(\mathcal C)$, without requiring additivity. Therefore projection of $H_n$ into $\mathcal C/(F+\langle a\rangle)$ factors through a surjection from $H_n/H_{n+1}$ onto its image. Quotienting the image of $H_n$ in $\mathcal C/F$ by its intersection with the cyclic image of $a$ lowers rational rank by at most one. To justify this without a finiteness assumption, rational localization is exact: if $x/s$ maps to zero in a localized quotient, some nonzero integer multiple of $x$ lies in the kernel, which represents the same fraction after multiplying its denominator. The rational span of a cyclic subgroup has dimension at most one. Thus an image of dimension at least $m+1$ yields dimension at least $m$ after this quotient. Step3.1 supplies the former for every $m$. The displayed surjection now forces $\operatorname{rank}_{\mathbb Q}(H_n/H_{n+1})\ge m$ for every finite $m$, proving infinite rank for every $n\ge0$. [F1, step 3.1, algebra]

5.1 For $n\ge1$, [F3] supplies a smooth knot $J$ such that $P^n(J)\#P^n(J)\#(-P^n(J\#J))$ is not smoothly slice. If the well-defined smooth map $P^n$ were a group homomorphism, its class would be $P^n([J])+P^n([J])-P^n([J]+[J])=0$. Zero in smooth concordance is equivalent to bounding a smooth proper disk, as in the smooth group convention of [F1], contradicting [F3]. This is a separate nonslice witness, not an implication from the rank conclusion. Every construction used actual smooth bounds with the explicit AC of its suppliers; no TOP comparison or original choice-free conclusion is supplied by this proof. [F1, F3, step 4.1, algebra] ∎
