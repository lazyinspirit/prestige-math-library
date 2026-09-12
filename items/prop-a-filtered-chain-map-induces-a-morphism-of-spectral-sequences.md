---
id: prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences
kind: proposition
title: A filtered chain map induces a morphism of spectral sequences
deps: ["def-filtered-chain-map", "thm-the-next-page-is-the-homology-of-the-current-page", "def-morphism-of-spectral-sequences", "lem-spectral-sequence-subquotient-and-local-lifting-calculus", "def-limiting-cycles-boundaries-and-e-infinity", "def-r-page-of-the-spectral-sequence-of-a-filtered-complex"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

Every filtered chain map induces a morphism of spectral sequences from page zero, respecting identities and composition. If its map on some page $s$ is an isomorphism in every bidegree, it is an isomorphism on every later page and on $E^\infty$ whenever the defining limiting subobjects exist.

## Facts & Assumptions

**Given:** A filtered chain map f:C→D between filtered complexes in an abelian category.

[F1] A filtered chain map satisfies $df=fd$ and preserves each filtration piece ([[def-filtered-chain-map]]).

[F2] The next-page isomorphisms are induced by inclusion of corrected cycle numerators and are natural ([[thm-the-next-page-is-the-homology-of-the-current-page]]).

[F3] A page morphism commutes with d and with the specified homology transitions ([[def-morphism-of-spectral-sequences]]).

[F4] Maps preserving subobjects descend uniquely to quotients ([[lem-spectral-sequence-subquotient-and-local-lifting-calculus]]).

[F5] The limiting term is the quotient of the meet of projected cycles by the join of projected boundaries, conditional on existence ([[def-limiting-cycles-boundaries-and-e-infinity]]).

[F6] The filtered pages have their projected cycle/boundary quotient model inside the initial page ([[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]]).

## Proof

**Proof technique:** direct.

1.1 For x through $A^r_{p,n}(C)$, $f_nx$ lies in $F_pD_n$ and $d_Df_nx=f_{n-1}d_Cx$ lies in $F_{p-r}D_{n-1}$. Hence f carries $A^r(C)$ into $A^r(D)$. It also carries $A^{r-1}_{p-1}(C)$ into its target counterpart and $d_C A^{r-1}_{p+r-1}(C)$ into $d_D A^{r-1}_{p+r-1}(D)$. For r=0 it preserves both $F_p$ and $F_{p-1}$. Thus [F4] supplies each quotient map $f_r$. [F1, F4]

1.2 Fix a bidegree. For subobjects $B_s\subseteq U\subseteq Z_s$, the map $U\mapsto U/B_s$ identifies this interval with the subobjects of $Z_s/B_s=E^s$. The inverse is pullback under the epic quotient: its restricted projection is epic by [F4], with kernel $B_s$, so the two operations are inverse by the image and quotient identities in [F4]. Both preserve inclusion. An order isomorphism preserves every existing meet and join: its inverse sends each lower bound back to a lower bound, proving the greatest-lower-bound property in both directions, and the upper-bound argument is identical. Apply this to the tail families $Z_t,B_t$ for $t\ge s$. Earlier cycles contain $Z_s$ and earlier boundaries lie in $B_s$, so deleting their finitely many terms changes neither limit. Thus the limits of the tail inside $E^s$ are $Z_\infty/B_s$ and $B_\infty/B_s$; their quotient is $Z_\infty/B_\infty$ by the nested-quotient identity [F4]. This identifies the limiting model started at $s$ with [F5]. [F4, F5, F6]

2.1 On the numerator, $d_Df_n=f_{n-1}d_C$, so after quotient descent and epic cancellation $d_D^rf_r=f_rd_C^r$. The inclusion-induced comparisons used to define α in [F2] commute with f by the same numerator restrictions; their inverses commute too. Thus $f_{r+1}\alpha_r^C=\alpha_r^D H(f_r)$, exactly [F3]. [F1, F2, F3, F4, step 1.1]

2.2 For an identity chain map the descended map is the identity because its composite with the quotient is unchanged. For g after f, both $(gf)_r$ and $g_rf_r$ compose with the source quotient to the map induced by $g_nf_n$. Uniqueness in [F4] equates them. [F4, step 1.1]

3.1 Suppose $f_s$ is an isomorphism in every bidegree. Its inverse commutes with the differentials: multiply $d'f_s=f_sd$ on the two sides by the corresponding inverse components. The restrictions of these inverse maps give inverse maps on kernels and images and hence on homology by [F4]. The transition identity in step 2.1 then makes $f_{s+1}$ an isomorphism. Induction gives the assertion on all later pages, and their inverses respect the transitions. [F3, F4, step 2.1]

4.1 By step 3.1 the isomorphism $f_s$ and its inverse carry each recursively defined cycle and boundary subobject of $E^s(C)$ onto its counterpart in $E^s(D)$: start at $s$ with the whole object and zero; at each transition take inverse images of the outgoing kernel and incoming image under the current cycle quotient. These are the projected subobjects of [F6]. At $r=0$, the kernel is the projection of $A^1_{p,n}$ and the incoming image is the projection of $d(F_pC_{n+1})$, directly from $d^0[x]=[dx]$, where $n=p+q$. For $r\ge1$, if $d x=a+d b$ represents zero in the target, lift locally by [F4]; the target lower-filtration term $a$ permits $x-b$ on the next cycle numerator, while $b$ has filtration $p-1$ and vanishes on projection. Conversely a next-cycle representative maps to zero. The incoming image is the projection of $d A^r_{p+r,n+1}$, precisely the new projected boundary term. This proves the recursive identification with both directions for cycles and the exact image for boundaries; it is also the quotient comparison in [F2]. The resulting order isomorphism therefore identifies the existing meets and joins by step 1.2. Quotient descent gives inverse maps on their quotients. Under the limiting identifications of step 1.2 this is the induced $f_\infty$, proving the assertion without assuming unbounded abutment or exactness of infinite sums. [F2, F4, F5, F6, step 3.1, step 1.2] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here. Compare [Stacks §12.24](https://stacks.math.columbia.edu/tag/012K), Lemma 12.24.4.

The infinity clause supplies the promised argument for [Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Exercise 5.2.3, printed p.125; existence of the limiting subobjects is explicit, as in the warning preceding that exercise.
