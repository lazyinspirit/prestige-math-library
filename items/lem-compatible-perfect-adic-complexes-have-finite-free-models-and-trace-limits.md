---
dependency_level: 0
id: lem-compatible-perfect-adic-complexes-have-finite-free-models-and-trace-limits
kind: lemma
title: Compatible perfect adic complexes have a finite free model and compatible traces
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-perfect-complex-over-a-ring
  - thm-a-bounded-above-complex-of-projectives-is-homotopically-projective
  - prop-morphisms-from-a-homotopically-projective-complex-need-no-roof
  - thm-exactness-of-inverse-limits-under-mittag-leffler
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Grothendieck et al., SGA 5, Exposé XV, Section 3
      url: https://grothendiecksga.com/read/sga5/en/XV-3.html
      locator: Perfect-complex lifting and compatible trace arguments following Proposition 2
axiom_use: Assume AC for compatible model, basis and homotopy-lift selections and the countable Mittag-Leffler theorem. Every cancellation within one finite complex is finite.
---

## Statement

Assume the Axiom of Choice. Let $A$ be a complete discrete valuation ring with uniformizer $\pi$, finite residue field and fraction field $E$, and put $A_r=A/(\pi^r)$ for $r\geq1$. Suppose $K_r$ is a perfect complex of $A_r$-modules, with specified compatible isomorphisms $K_{r+1}\otimes^L_{A_{r+1}}A_r\cong K_r$ in derived categories. Let $u_r$ be endomorphisms compatible with these isomorphisms. Then there is a bounded complex $P$ of finite free $A$-modules and a chain endomorphism $u:P\to P$ whose reductions represent the given complexes and endomorphisms compatibly. Its cohomology modules are finitely generated and canonically $H^i(P)=\varprojlim_rH^i(K_r)$; they vanish outside a fixed finite interval. For an endomorphism of a perfect complex, define its trace to be the alternating sum of the termwise traces on a bounded finite-projective representative. This is independent of the representative and chain-map lift. The traces $\operatorname{Tr}^*(u_r\mid K_r)$ are the reductions of one element $t\in A$, and its image in $E$ is
$$t=\sum_i(-1)^i\operatorname{Tr}\bigl(u\mid H^i(P)\otimes_A E\bigr).$$
Here the equality is in $E$, and the identifications of cohomology use the supplied compatible reductions. No geometric pushforward or assertion of derived-reduction compatibility for an étale cohomology complex is assumed to follow from this algebraic statement.

## Statement references

[[def-perfect-complex-over-a-ring]]

[[thm-a-bounded-above-complex-of-projectives-is-homotopically-projective]]

[[prop-morphisms-from-a-homotopically-projective-complex-need-no-roof]]

[[thm-exactness-of-inverse-limits-under-mittag-leffler]]

[[def-axiom-of-choice]]

[SGA 5, Exposé XV, Section 3](https://grothendiecksga.com/read/sga5/en/XV-3.html)

## Facts & Assumptions

**Given:** AC, the complete discrete valuation ring, compatible perfect complexes, reduction isomorphisms and endomorphisms in the statement.

[F1] A perfect complex has a bounded finite-projective representative. [[def-perfect-complex-over-a-ring]]

[F2] A bounded-above complex of projectives is homotopically projective under the stated choice hypothesis; maps out of it in the derived category are chain maps modulo homotopy. [[thm-a-bounded-above-complex-of-projectives-is-homotopically-projective]] [[prop-morphisms-from-a-homotopically-projective-complex-need-no-roof]]

[F3] Under AC, a short exact sequence of countable inverse systems remains exact on inverse limits if its left system is Mittag-Leffler. [[thm-exactness-of-inverse-limits-under-mittag-leffler]]

[A1] AC licenses the successive compatible model, basis and homotopy selections below. [[def-axiom-of-choice]]

## Proof

1.1 Every finite projective $A_r$-module $M$ is free. Indeed, lift a basis of $M/\pi M$ to a map $A_r^s\to M$. Its cokernel $C$ satisfies $C=\pi C$, so iterating $r$ times gives $C=0$. Split this surjection by projectivity, writing $A_r^s=M\oplus L$. Reduction modulo $\pi$ shows $L/\pi L=0$, and the same nilpotence argument gives $L=0$. Thus [F1] gives each $K_r$ a bounded finite-free representative. [given, F1, algebra]

2.1 A bounded finite-free complex over $A_r$ can be made minimal by canceling unit entries in its differential matrices. If a differential has a unit entry, invertible row and column operations isolate a summand $A_r\xrightarrow{1}A_r$. The identity $d^2=0$ makes all adjacent maps into and out of this pair zero, so it is a direct contractible summand. Remove it. Each cancellation lowers the total finite rank by two, so the process terminates with every differential entry in $(\pi)$. Call this representative minimal. Its reduction modulo $\pi$ has zero differential. [step 1.1, algebra]

2.2 For matrices over a commutative ring, $\operatorname{Tr}(ab)=\operatorname{Tr}(ba)$, including rectangular matrices, by interchanging the two finite index sums. Therefore the alternating termwise trace of $dh+hd$ is zero, with adjacent terms canceling. Chain-homotopic maps have equal alternating trace. If $a:P\to Q$ and $b:Q\to P$ are a homotopy equivalence and inverse, the transferred map $avb$ has the same alternating trace as $vba$, hence as $v$, by that matrix identity and homotopy invariance. Thus the trace of a perfect-complex endomorphism is independent of its bounded projective representative and chain lift. Step 1.1 provides finite-free representatives over every $A_r$; over $A$ a finite projective is a direct summand of a finite free module and is free as follows. For a submodule of $A^s$, project to its first coordinate. The image ideal is principal and therefore either zero or free of rank one, so this projection splits. Its kernel is a submodule of $A^{s-1}$, and induction on $s$ gives a finite free decomposition. This justifies the termwise trace convention used here. [F1, F2, step 1.1, algebra]

3.1 By [F2], an isomorphism in the derived category between bounded projective complexes is represented by a homotopy equivalence. A chain homotopy equivalence between minimal finite-free $A_r$-complexes is a chain isomorphism: modulo $\pi$ both differentials vanish, so the homotopy-inverse identities become genuine degreewise inverse identities. Each square matrix is therefore invertible over $A_r$, because its determinant is a unit modulo $\pi$. This also shows that all minimal representatives have, in degree $i$, rank $\dim_{A_1}H^i(K_1)$ when their reduction is $K_1$. These ranks vanish outside one fixed finite interval. [F2, step 2.1, algebra]

4.1 Choose a minimal representative $P_r$ at each level. Reduction of $P_{r+1}$ to $A_r$ is still minimal and represents $K_r$ by the supplied derived-reduction isomorphism. Step 3.1 represents that isomorphism by an actual chain isomorphism $P_{r+1}/\pi^rP_{r+1}\to P_r$. Use its composite with reduction as transition map. All complexes now have the same finite degreewise ranks and a common finite degree interval. The transition identifications represent the specified derived identifications; their iterated composites represent all further compatible reductions. [A1, F2, step 3.1, construct]

5.1 Choose a chain lift of $u_1$. Suppose compatible lifts have been chosen through level $r$, and choose any chain lift $v$ of $u_{r+1}$ on $P_{r+1}$. Its reduction and the chosen lift on $P_r$ represent the same derived morphism. By [F2] their difference is $dh+hd$ for a degree-minus-one homotopy $h$. Lift the finitely many matrices of $h$ to $A_{r+1}$, and subtract $d\widetilde h+\widetilde h d$ from $v$. The result is a chain map representing the same endomorphism and reducing exactly to the chosen map at level $r$. Recursion under [A1] constructs a strictly compatible system of chain endomorphisms. [A1, F2, step 4.1, construct, algebra]

6.1 Choose degreewise compatible bases recursively. A basis of a free module modulo $\pi^r$ lifts to a basis at level $r+1$ because its coefficient determinant is a unit modulo $\pi$. Thus the tower is identified degreewise with the standard reduction tower $A_r^{s_i}$. Completeness gives $\varprojlim_rP_r^i=A^{s_i}$. Taking entrywise limits of the differentials and endomorphisms produces a bounded finite-free complex $P$ and a chain endomorphism $u$. The identities $d^2=0$ and $du=ud$ hold because they hold in every quotient and $A$ is separated. [given, A1, step 4.1, step 5.1, construct, algebra]

7.1 All modules in every $P_r$ are finite sets because $A_1$ is finite; hence its cycles $Z_r^i$, boundaries $B_r^i$ and cohomology modules $H_r^i$ are finite. Every tower of finite groups is Mittag-Leffler: the images in any fixed finite group form a descending chain of subsets and stabilize. Apply [F3] to $0\to Z_r^i\to P_r^i\to B_r^{i+1}\to0$ and $0\to B_r^i\to Z_r^i\to H_r^i\to0$. Kernels commute with inverse limits directly, so the first sequence identifies the cycles of $P$ with $\varprojlim Z_r^i$ and its boundaries with $\varprojlim B_r^i$. The second then gives $H^i(P)=\varprojlim H_r^i$. A discrete valuation ring is Noetherian, since every nonzero ideal is generated by the least valuation of one of its elements. Its submodules and quotients of finite free modules are finitely generated: project to one coordinate, use that its image ideal is principal, and induct on the rank to generate the kernel. This proves finite generation of the cohomology. The fixed degree interval gives the asserted vanishing. [F3, step 6.1, algebra]

8.1 Let $t=\sum_i(-1)^i\operatorname{Tr}(u^i\mid P^i)\in A$. The reductions of its matrices are the compatible chain maps of step 5.1, so its reduction modulo $\pi^r$ is $\operatorname{Tr}^*(u_r\mid K_r)$ by step 2.2. Localization $A\to E$ is exact: if a fraction maps to zero, some power of its nonzero denominator annihilates its numerator, which proves preservation of kernels and images. Hence $H^i(P\otimes_AE)=H^i(P)\otimes_AE$. Over $E$, the invariant filtration by boundaries and cycles makes each termwise trace the sum of its two boundary contributions and its cohomology contribution; this follows by writing its matrix in a basis adapted to that filtration. The identification $P^i/Z^i\cong B^{i+1}$ intertwines the endomorphisms, so all boundary contributions cancel in the alternating sum. The remaining terms give exactly the displayed identity in $E$. Every sum is finite. This proves the lemma. [step 5.1, step 6.1, step 7.1, step 2.2, algebra] ∎

## Remarks

Derived reduction is an essential hypothesis. A compatible tower of finite cohomology groups alone need not have a finitely generated inverse limit, and ordinary tensor reduction of nonflat torsion sheaves does not supply the stipulated derived isomorphisms. Applying this lemma to étale cohomology therefore requires separately proved geometric reduction, finite-Tor and perfectness interfaces. This item provides none of those interfaces by citation.
