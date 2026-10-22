---
id: lem-balanced-low-index-strip-limits-have-only-unit-boundary-degenerations
kind: lemma
title: "Balanced low-index strip limits have only unit boundary degenerations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-actual-bubbled-strip-limits-preserve-total-fredholm-index, lem-balanced-boundary-disk-domains-have-twice-component-sum-maslov-index, lem-multipointed-symmetric-product-spheres-have-index-shift-two-k, lem-nearly-symmetric-compact-bubble-domain-positivity-and-energy, lem-product-integrable-transverse-strip-end-exponential-asymptotics, thm-countable-choice-bubbled-transverse-strip-breaking-compactness]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks, link invariants and the multi-variable Alexander polynomial"
      url: "https://arxiv.org/abs/math/0512286"
      locator: "Section 5.3; actual low-index classification below follows from locally proved operator indices, positivity and compactness, without importing a count"
---

## Statement

Assume Countable Choice. Let $\Sigma$ have genus $h$ and let each of two size-$m$ attaching systems be the boundary of disjoint proper compression disks cutting its connected handlebody into $k$ balls, where $m=h+k-1>0$. Put $X=\operatorname{Sym}^m\Sigma$, with the two oriented product tori $L_\alpha,L_\beta$ transverse. Broad proper-disk boundary tangencies are allowed. Use nearly symmetric tame paths and protected diagonal/divisor neighborhoods satisfying the compact-bubble domain-positivity and energy hypotheses, together with the common exact generator charts, fixed boundary structures and coefficient convergence of the actual bubbled transverse-strip compactness theorem.

Let $u_n$ be a bounded-energy sequence of nonconstant strips, all of actual Fredholm index $I\in\{1,2\}$, and take an actual bubbled limit supplied by that compactness theorem. Suppose EVERY nonconstant limiting strip level is regular, meaning that its actual $H^1\to L^2$ linearization is onto. Then the following list is exhaustive, before longitudinal quotient and after discarding unnecessary constant vertices.

If $I=1$, there is exactly one nonconstant strip level, of index one, and no bubbles.

If $I=2$, exactly one of these alternatives occurs:

1. One nonconstant index-two strip level, with no bubbles.
2. Two nonconstant index-one strip levels with their matched intermediate generator, and no bubbles.
3. One constant generator strip and one nonconstant disk bubble attached directly to its alpha or beta boundary. This disk has Maslov index two and domain exactly ONE component $A_i$ of the corresponding single attaching-system complement. There are no sphere or additional disk vertices.
4. Only when $k=1$: one constant generator strip and one nonconstant sphere of point-divisor degree one. Stable constant ghost vertices are allowed in this alternative; there are no other nonconstant components. The sphere passes through that generator at its attachment to the constant part of the tree.

In particular for $k\ge2$ no sphere bubbling can occur in these limits. This is an actual index/domain restriction under the explicitly stated strip-regularity premise. It does not establish that premise, regularity or existence of the unit disks, their count, a boundary gluing collar, a compactified one-manifold, or cancellation. No marked multiplicity of $u_n$ is required to vanish.

## Statement references

[[def-countable-choice]]

[[thm-countable-choice-bubbled-transverse-strip-breaking-compactness]]

## Facts & Assumptions

**Given:** The balanced data, actual nearly symmetric geometry and bounded-energy sequence, its actual compactness subsequence, index $I$, and surjectivity of every nonconstant limiting strip operator.

[F1] Actual bubbled-index additivity gives eventually $I=\sum\operatorname{ind}D_v+\sum\mu(d)+2\sum c_1(s)$, including constant levels and ghosts. ([[lem-actual-bubbled-strip-limits-preserve-total-fredholm-index]])

[F2] On either balanced single product torus, every realized smooth disk has $\mu(d)=2\sum_i b_i$ for its component-domain coefficients. The supplier prepares broad proper cuts and constructs the needed finite surface polygon, and its proof gives the actual Cayley homotopy from the protected nearly symmetric structure to the standard symmetric-product structure. ([[lem-balanced-boundary-disk-domains-have-twice-component-sum-maslov-index]])

[F3] Every smooth sphere has $c_1(s)=(m+1-h)n_z(s)=k n_z(s)$, unchanged under a supplied homotopy of complex structures. The required polygon is furnished by [F2]'s actual cut preparation. ([[lem-multipointed-symmetric-product-spheres-have-index-shift-two-k]])

[F4] Compact protected holomorphic disk domains have nonnegative integer coefficients, and zero domain forces a constant disk. Compact holomorphic spheres have a common nonnegative point-divisor degree, and zero such degree forces a constant sphere, including contained images. ([[lem-nearly-symmetric-compact-bubble-domain-positivity-and-energy]])

[F5] Actual finite-energy strip ends in the common exact product charts have exponential convergence with every derivative. ([[lem-product-integrable-transverse-strip-end-exponential-asymptotics]])

[F6] Every retained strip level has positive energy INCLUDING its bubbles. Its bubble forest is finite; a constant sphere has at least three nodes and a constant disk has boundary-node count plus twice interior-node count at least three. Disks arise along physical boundary or disk boundary nodes; interior children are spheres. All node values match. ([[thm-countable-choice-bubbled-transverse-strip-breaking-compactness]])

## Proof

1.1 A nonconstant limiting strip $v$ has a nonzero actual kernel vector $v_s$. Differentiating its $s$-independent equation gives $D_vv_s=0$, and differentiating its boundary paths puts that section in the actual tangent boundary subbundles. It belongs to the $H^1$ domain: on a compact core it is smooth, and [F5] on both ends gives square integrability of it and its first derivatives. Multiplying by cutoffs tending to one gives convergence in $H^1$ and retains its boundary values, so it belongs to the specified completion. If $v_s$ vanished identically, its equation and invertibility of $J$ would give $v_t=0$, making $v$ constant. Regularity and Fredholmness therefore give $\operatorname{ind}D_v=\dim\ker D_v\ge1$. A constant generator strip has index zero by [F1]'s actual strip-frame calculation. This proves the required nonnegative strip contributions from actual operator surjectivity, without an expected-dimension assertion. [F1, F5, given, construct, algebra]

1.2 Every nonconstant disk bubble has nonnegative coefficients $b_i$ by [F4], at least one positive because its zero domain would force constancy. Formula [F2] gives $\mu(d)=2\sum b_i\ge2$, with equality precisely for a single coefficient one. This includes both individual boundary systems and all $k$, including the one-component case. For each frozen bubble structure use the actual Cayley homotopy in [F2]'s proof: it is stationary near the diagonal and contracts its anti-complex coefficient toward the standard background, retaining tameness and total reality. Thus [F3]'s homotopy clause applies to its complex tangent determinant. A nonconstant sphere has integer $n_z\ge1$ by [F4], and so its contribution is $2c_1(s)=2k n_z\ge2k$. Constant disk and sphere contributions vanish. These are indices of the actual compact components; no arbitrary formal chain is treated as a holomorphic class. [F2, F3, F4, construct, algebra]

2.1 Apply [F1] to the given sequence. Its finitely many nonzero contributions are integers bounded below as in steps1.1 and1.2, and by [F6] each retained strip level contains at least one positive contribution. For $I=1$, no disk or sphere contribution fits. All bubbles would therefore be constant. A nonempty finite bubble forest cannot have only constant vertices: a leaf has only its parent node, violating either stability inequality in [F6]. Hence no bubbles remain, every retained strip is nonconstant, and the total one forces exactly one strip of index one. For $I=2$ with no positive bubble contribution the same leaf argument removes every bubble, and the positive strip indices sum to two. This gives precisely one index-two strip or two index-one strips, with the actual matched ends supplied by compactness. [F1, F6, step 1.1, step 1.2, construct, algebra]

2.2 If $I=2$ and a nonconstant disk occurs, step1.2 exhausts the entire index budget with exactly one disk of index two. There are no positive sphere contributions and no nonconstant strip levels. Each retained level must have positive total energy by [F6], so there is exactly one level, its base is one constant generator, and this disk is its only nonconstant bubble. There are no ghost sphere vertices: any finite subtree starting at a sphere consists only of spheres, and with no nonconstant sphere it would end at an unstable constant sphere leaf. Thus the remaining bubble tree consists solely of disks attached by boundary nodes. Every constant disk vertex has its parent boundary node and at least two child boundary nodes by stability; following either child subtree in a finite tree must reach a nonconstant disk leaf. Such a branching vertex would require two distinct nonconstant disks, contradicting uniqueness. There is therefore no constant disk vertex either. The one disk attaches directly to the constant strip; its nodal value is that generator. Step1.2 identifies its actual domain as exactly one component $A_i$, proving alternative3 including absence of extra ghosts. [F1, F2, F4, F6, step 1.1, step 1.2, construct, algebra]

3.1 If $I=2$ and a nonconstant sphere occurs, its contribution $2k n_z\le2$ forces $k=1$ and $n_z=1$. There is exactly one such sphere and no other positive contribution. Consequently there is no nonconstant disk or strip, and by [F6] exactly one retained level, a constant generator with the sphere's stable tree attached. Constant ghost components may remain, for example a constant disk with a boundary parent node and an interior sphere child satisfies the weighted stability count; no unjustified removal of such vertices is made. Every component along the path from the constant strip to the unique nonconstant sphere is constant and has matching node values. Its attachment value on that sphere is therefore the generator. All other nonconstant components were excluded by the index budget. This is alternative4, and for $k\ge2$ it is impossible. Together with steps2.1 and2.2 it exhausts the actual index-one and index-two limits with no zero-mark assumption. The regularity premise has been used only in step1.1; proving it for an allowed auxiliary path, and proving counts and collars at the listed strata, remain separate obligations. [F1, F3, F4, F6, step 1.1, step 1.2, step 2.1, step 2.2, algebra] ∎
