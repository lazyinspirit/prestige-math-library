---
id: lem-zero-marked-bounded-energy-strip-regularity-survives-collar-approximation
kind: lemma
title: "Zero-marked bounded-energy strip regularity survives genuine collar approximation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-divisor-degree-additivity-and-zero-marked-strip-bubble-exclusion, thm-countable-choice-flat-endpoint-jet-universal-strip-regularity, lem-boundary-preserving-local-addition-for-transverse-product-tori, lem-strip-fredholm-index-agrees-in-higher-sobolev-spaces]
dependency_level: 11
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/abs/math/0101206"
      locator: "Universal regularity and compactness in Sections 3.2–3.8; the bounded-energy collar-approximation argument is proved below"
---

## Statement

Assume Countable Choice and the nearly symmetric marked strip geometry of the zero-marked bubble-exclusion lemma. In particular all individual boundary curve-system complement components contain marked points, and the almost complex paths have common exact product generator charts, common protected diagonal/region/marked-divisor neighborhoods, and fixed totally real boundary structures. Let $J^*$ be a smooth path in this geometry such that every nonconstant finite-energy zero-marked $J^*$ strip has surjective actual $H^1\to L^2$ linearization. It need not be constant on time-endpoint collars. Fix $E_0<\infty$.

Suppose $J_n\to J^*$ smoothly, with those same fixed geometric structures, including the common generator charts, and uniform nearly symmetric energy constants. Then for all sufficiently large $n$, every zero-marked $J_n$ strip of energy at most $E_0$ has surjective actual linearization. In fact specified right inverses $L^2\to H^1$ can be chosen with one uniform finite bound for all these strips and all sufficiently large $n$, using a fixed smooth target connection flat in the generator charts. Surjectivity also holds in every integer higher Hilbert Sobolev realization.

Consequently a generic auxiliary flat-endpoint-jet path supplied by the flat-jet universal regularity theorem has genuine constant-collar approximating paths which are regular for all zero-marked strips of energy at most this fixed $E_0$. This supplies bounded-energy constant-collar regularity, including same-generator strips. It does not supply a uniform energy bound for all Floer classes of a prescribed index; any such admissibility/domain-index argument remains a separate prerequisite for unrestricted moduli counts or index-two compactifications.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The actual compact target, marked cut systems, smooth coefficient convergence, common exact generator charts, uniform energy bound and all-strip limiting regularity in the statement. Use a fixed connection flat in those charts to define section $H^1$ norms.

[F1] [[lem-divisor-degree-additivity-and-zero-marked-strip-bubble-exclusion]] gives actual finite unbubbled strip breaking for every such bounded-energy zero-marked sequence, with nonconstant limit levels, smooth convergence on compact translated cores, matched generators, complete energy identity and collapsing outer/intermediate necks.

[F2] [[lem-boundary-preserving-local-addition-for-transverse-product-tori]] constructs smooth isomorphisms between tangent bundles along sufficiently close maps by its fiber derivative, carrying the actual boundary tangent spaces to one another; it is exactly linear and the isomorphism is the identity in the fixed generator charts. [[lem-strip-fredholm-index-agrees-in-higher-sobolev-spaces]] gives actual Fredholmness, bounded inverses on orthogonal kernel complements and higher range agreement.

[F3] [[thm-countable-choice-flat-endpoint-jet-universal-strip-regularity]] supplies actual all-strip regular auxiliary paths and smooth genuine constant-collar approximations, with exactly the protected structures retained here. It asserts no regularity of those approximations without the argument below.

## Proof

1.1 We first prove a concrete linear assertion for any sequence $u_n$ to which [F1] gives nonconstant regular levels $v_1,\ldots,v_M$ translated by $q_{1,n}<\cdots<q_{M,n}$. Write $D_n$ and $D_j$ for the actual strip linearizations at $u_n$ and $v_j$. Each $D_j$ is onto by the limiting regularity assumption. The actual Fredholm lower bound on its orthogonal kernel complement in [F2] gives a bounded right inverse $Q_j:L^2\to H^1$. There are finitely many levels, so these fixed operator norms have a finite maximum. Each level's sufficiently long ends lie in its exact generator charts; there the operator is exactly $D_0=\partial_s+i\partial_t$, not merely asymptotic to it, because the almost complex structure is constant in target and time on these charts. The same holds for $D_n$ on every portion of $u_n$ in those charts. Choose one fixed large core size $A$ so all level tails outside it lie strictly inside their matching charts. Smooth core convergence and the actual gap and outer-tail collapse in [F1] imply that $u_n$ lies in those same charts everywhere outside the translated size-$A$ cores, after increasing $A$ and then $n$. Indeed the gap collapse is uniform outside large cores, and the finitely many remaining bounded tail regions follow by smooth convergence. The charts and labels are fixed by the matched generators. [F1, F2, given, construct, algebra]

2.1 On the translated core of level $j$, smooth convergence gives a bundle isomorphism $T_{j,n}:v_j^*TX\to u_n(\cdot+q_{j,n},\cdot)^*TX$ from [F2], preserving both boundary spaces. Outside a slightly larger fixed core both maps are in the same generator chart, where this isomorphism is the identity, so extend it as that identity on every matching end portion. These definitions agree on overlaps because the local addition is exactly linear there. The isomorphisms and their inverses have uniform coefficient and first-derivative bounds. In particular they are uniformly bounded on both $L^2$ and $H^1$. On every region where the two maps are compared, smooth convergence on the fixed cores gives $$\|D_nT_{j,n}-T_{j,n}D_j\|_{H^1\to L^2}\le\epsilon_n,\qquad\epsilon_n\to0.$$ Outside those cores the difference is exactly zero, since both operators are $D_0$ and $T_{j,n}=I$. Thus the bound does not grow with the neck lengths. These comparisons need only be defined on the supporting regions below; on an overlap of two neighboring supporting regions both are the same canonical generator-coordinate identification. [F1, F2, step 1.1, construct, algebra]

3.1 Choose $R_n\to\infty$ smaller than one tenth of every successive gap length, with $R_n>A$; when $M=1$ there are no gaps to constrain it. Construct real smooth longitudinal cutoffs $\eta_{j,n}$ with $\sum_j\eta_{j,n}^2=1$, equal to one on each fixed translated level core, and with $|\eta_{j,n}'|\le C/R_n$. They transition between neighboring levels near their gap midpoint on intervals of length $2R_n$, using $(\cos\theta,\sin\theta)$ for a fixed smooth angle from $0$ to $\pi/2$. Nonadjacent supports are disjoint; the first cutoff stays one on the whole negative outer tail and the last one on the whole positive outer tail. For $M=1$ set $\eta_{1,n}=1$. Every cutoff support is therefore in a region where the corresponding comparison in step 2.1 is defined. For a target section $f$, translate and identify $\eta_{j,n}f$ to the level, extending it by zero outside that support, and call this $f_j$. Define $$Q_n^0 f=\sum_j\eta_{j,n}T_{j,n}Q_j f_j,$$ with the inverse translations understood. This is an actual $H^1$ section in the correct zeroth boundary domain. Multiplication by the real cutoffs preserves the boundary spaces. The zero extension of $f_j$ is only in $L^2$, so imposes no artificial trace condition; the reconstructed smooth-cutoff product is in $H^1$ by the weak Leibniz rule. The finite sum and the uniform isomorphism bounds give $\|Q_n^0\|_{L^2\to H^1}\le C_0$ independent of $n$. [step 1.1, step 2.1, construct, algebra]

4.1 Applying $D_n$ to this finite sum gives its leading term $\sum_j\eta_{j,n}^2 f=f$. All errors are either $\eta_{j,n}(D_nT_{j,n}-T_{j,n}D_j)Q_jf_j$ or the scalar derivative term $\eta_{j,n}'T_{j,n}Q_jf_j$. The latter formula follows directly from the first-order principal part $\partial_s+J\partial_t$ since the cutoffs depend only on $s$. Consequently $$D_nQ_n^0=I+E_n,\qquad\|E_n\|_{L^2\to L^2}\le C_1(\epsilon_n+R_n^{-1})\longrightarrow0.$$ For large $n$, the explicit Neumann series $(I+E_n)^{-1}=\sum_{r\ge0}(-E_n)^r$ converges in operator norm with bound at most two. Thus $Q_n=Q_n^0(I+E_n)^{-1}$ is a right inverse and $\|Q_n\|\le2C_0$. This is a linear parametrix for the actual nearby solutions; it assumes neither a nonlinear gluing surjectivity theorem nor an identification of their indices with domain formulas. [step 2.1, step 3.1, construct, algebra]

5.1 If the asserted eventual regularity failed, choose a subsequence of nonregular zero-marked $J_n$ strips with energy at most $E_0$. Constant strips cannot be nonregular: their operator in the exact chart is the transverse product $D_0$, which is invertible by the same actual Fredholm model in [F2]. Apply [F1] to the chosen nonconstant sequence. Its limit has finitely many nonconstant strip levels and no bubbles; every level is regular by hypothesis. Steps 1.1–4.1 give right inverses for all sufficiently large members, a contradiction. The uniform inverse bound follows by the same compactness argument. For an onto actual operator define its canonical right inverse on its $H^1$ orthogonal kernel complement, as in [F2]; it has smallest solution norm for each forcing and its operator norm is no larger than any specified right inverse. If these canonical norms were unbounded along arbitrarily large $n$, choose strips with norm greater than an integer tending to infinity. A constant subsequence has the fixed exact chart bound. Otherwise [F1] and steps 1.1–4.1 supply a finite common bound along a subsequence, again a contradiction. The higher regularity/range agreement in [F2] transfers surjectivity to all integer higher realizations. Finally apply this result to the actual approximations in [F3]. For the fixed $E_0$ all sufficiently close members are regular, and each has genuine endpoint collars. No energy bound for unrestricted index classes has been deduced. Only Countable Choice, finite patching and explicit convergent inverse series were used. [F1, F2, F3, step 1.1, step 2.1, step 3.1, step 4.1, construct, algebra] ∎
