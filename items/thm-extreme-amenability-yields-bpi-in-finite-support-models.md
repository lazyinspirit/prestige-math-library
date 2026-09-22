---
id: thm-extreme-amenability-yields-bpi-in-finite-support-models
kind: theorem
title: "Extreme amenability yields BPI in finite-support permutation models"
status: draft
origin: pipeline
deps: [def-boolean-prime-ideal-principle, def-symmetric-and-hereditarily-symmetric-sets, def-permutation-support-system-and-normal-filter, thm-bpi-equivalent-to-set-ultrafilter-lemma, def-boolean-ideals-filters-and-primality, def-stone-ultrafilter-space-and-clopens, def-hausdorff-space, def-compact-space, def-subspace-topology-top, def-product-topology, def-continuous-map-top, def-zfa-universe-atoms-and-kernel, def-topological-space, def-axiom-of-choice, thm-choice-implies-boolean-prime-ideal-principle, thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma, thm-closed-subspace-of-a-compact-space-is-compact]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  scraped: []
  references:
    - title: "Andreas Blass, Partitions and Permutation Groups"
      url: "https://janos.cs.technion.ac.il/RESEARCH/AMS-Book-files/pdfs/11_Blass.pdf"
      locator: "Definition 2.1, Theorems 5.1-5.2, pp. 2 and 12-14"
    - title: "Philipp Kleppmann, Free Groups and the Axiom of Choice"
      url: "https://www.repository.cam.ac.uk/bitstream/1810/253759/1/thesis.pdf"
      locator: "Chapter 2, §2.1, pp. 16-20"
---

## Statement

Work internally in an arbitrary model $M$ of ZFA+AC
([[def-zfa-universe-atoms-and-kernel]], [[def-axiom-of-choice]]); no external
well-foundedness or transitivity of $M$ is assumed. Let $M$ see a group $G$
acting on a set of atoms $A$, and let its associated hereditarily symmetric
interpretation be built from the finite-support filter
([[def-permutation-support-system-and-normal-filter]],
[[def-symmetric-and-hereditarily-symmetric-sets]]). Suppose that for every finite
$E \subseteq A$, $M$ satisfies that the pointwise stabiliser
$\operatorname{fix}(E)$ is **extremely amenable** in the topology of pointwise
convergence: every internally continuous action on an internally nonempty
compact Hausdorff space has a fixed point. Then the hereditarily symmetric
interpretation satisfies BPI
([[def-boolean-prime-ideal-principle]]).

## Facts & Assumptions

**Given:** Inside $M$, a finite-support permutation system, the stated extreme-amenability hypothesis, an internally nontrivial Boolean algebra $B$ of the hereditarily symmetric interpretation, and a finite support $E$ of its entire algebra structure (underlying set, operations and distinguished constants). Every compactness, topology and fixed-point assertion below is interpreted in $M$.

[F1] The internal rank recursion defining hereditary symmetry and the standard normal-filter closure argument give a ZFA interpretation in any model of ZFA+AC: the action and hereditary-symmetry predicate are defined by the rank recursion of $M$; normality gives invariance; the power set is the set of hereditarily symmetric members of the ambient power set; and Separation and Replacement are the relativised instances in $M$. An object belongs to that interpretation exactly when it is hereditarily symmetric. Admitting a finite support proves symmetry of the object itself, but membership additionally requires hereditary symmetry of every membership descendant ([[def-symmetric-and-hereditarily-symmetric-sets]], [[def-permutation-support-system-and-normal-filter]]).

[F2] Internally in $M$, AC implies BPI ([[def-axiom-of-choice]], [[thm-choice-implies-boolean-prime-ideal-principle]]) and hence the set ultrafilter lemma ([[thm-bpi-equivalent-to-set-ultrafilter-lemma]]). Under that lemma a product of compact Hausdorff spaces is compact ([[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]]), and a closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]). These are theorem instances evaluated by $M$, not external compactness claims about an ill-founded presentation of $M$.

[F4] Prime ideals contain $0$, exclude $1$, are downward closed and closed under joins, and satisfy the meet-primality condition ([[def-boolean-ideals-filters-and-primality]]). BPI asserts existence for every nontrivial Boolean algebra ([[def-boolean-prime-ideal-principle]]).

[F3] Extreme amenability of $H = \operatorname{fix}(E)$: every continuous action of $H$ on a nonempty compact Hausdorff space has a fixed point. [given]

[L1] Basic product neighbourhoods in $2^B$ restrict finitely many coordinates; subspace neighbourhoods are their traces ([[def-product-topology]], [[def-subspace-topology-top]]). Continuity is tested by open neighbourhoods ([[def-continuous-map-top]], [[def-topological-space]]). The finite discrete space $2$ is compact and Hausdorff ([[def-compact-space]], [[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 Carry out the argument in $M$. Let $B$ be an internally nontrivial Boolean algebra of the hereditarily symmetric interpretation, and choose a finite support $E$ for its entire structure; put $H=\operatorname{fix}(E)$. The induced action of $H$ on its underlying set preserves every algebra operation and constant, so acts by Boolean automorphisms. Each $b\in B$ is hereditarily symmetric and has a finite support of its own. [given, F1]

2.1 In $M$ let $S(B)$ be the set of prime ideals, represented by their characteristic functions in $2^B$. It is internally nonempty by [F2]. It is internally closed: failure of any condition in [F4] is witnessed by finitely many coordinates ($0$, $1$, a pair $a\le b$, a join or a meet), so every nonideal or nonprime subset has a basic product neighbourhood disjoint from $S(B)$. Internally, $2^B$ is compact by [F2] and [L1], and $S(B)$ is therefore compact with its subspace topology. Distinct subsets differ at a coordinate, whose two complementary cylinders separate them, so $S(B)$ is Hausdorff. AC is used in $M$ for BPI and the resulting product compactness; it is not assumed in the hereditarily symmetric interpretation. [step 1.1, F2, F4, L1]

2.2 For $h\in H$ and $P\in S(B)$ put $hP=\{hb:b\in P\}$. Boolean automorphisms preserve the prime-ideal conditions, so this defines an action on $S(B)$. To prove joint continuity, fix $(h_0,P_0)$ and a basic neighbourhood of $h_0P_0$ specifying membership on a finite set $C\subseteq B$. For each $b\in C$, take a finite support of $h_0^{-1}b$, and let $D$ be their finite union. Then $K=H\cap\operatorname{fix}(D)$ is open in $H$ for the pointwise-convergence topology on atoms. The coset $h_0K$ is open: its defining restrictions are $h(a)=h_0(a)$ for $a\in D$, within $H$. Let $V$ consist of prime ideals agreeing with $P_0$ on $h_0^{-1}C$. For $h=h_0k\in h_0K$ and $P\in V$, one has $h^{-1}b=k^{-1}h_0^{-1}b=h_0^{-1}b$ for $b\in C$, so $b\in hP$ exactly when $b\in h_0P_0$. Thus $(h_0K)\times V$ maps into the prescribed neighbourhood. This proves joint continuity; it does not assert openness of a prime ideal's point stabilizer. [step 1.1, F1, F4, L1]

3.1 Inside $M$, apply the Given extreme amenability of $H$ to the internally nonempty compact Hausdorff space of step 2.1 and the continuous action of step 2.2. Obtain a prime ideal $P$ fixed by every member of $H$. [step 2.1, step 2.2, F3]

4.1 The finite set $E$ supports $P$. Moreover every member of $P$ belongs to $B$ and hence is hereditarily symmetric. Thus $P$ is hereditarily symmetric by [F1], so belongs to the interpretation. The prime-ideal conditions are bounded formulas about $P$, $B$, their operations and their members. Relativising those bounded quantifiers to the hereditarily symmetric interpretation changes no witness: all elements of $B$ already lie there, and the operations are the same supported objects. Therefore the interpretation itself satisfies that $P$ is a prime ideal of $B$. No appeal to external transitivity is made. [step 1.1, step 3.1, F1, F4]

5.1 The reasoning in steps 1.1--4.1 is an argument formalised inside the arbitrary model $M$. Since $B$ was an arbitrary internally nontrivial Boolean algebra of its hereditarily symmetric interpretation, the internal prime ideal furnished in step 4.1 establishes BPI there. The trivial algebra requires no prime ideal. This conclusion therefore applies equally to externally ill-founded models used in relative-consistency arguments. [step 4.1, F4] ∎

## Remarks

- **What the extreme-amenability hypothesis is used for.** It replaces the missing choice inside the symmetric interpretation by a fixed-point statement in $M$: the prime-ideal space is internally nonempty and compact there, and one stabiliser of the algebra's finite support has a fixed point, which is then supported by that same finite set.

- **Why finite supports.** The argument needs the stabiliser of the algebra to be one of the groups assumed extremely amenable, and in a finite-support model the stabiliser of any set with finite support has finite support; no claim is made for infinite supports.
