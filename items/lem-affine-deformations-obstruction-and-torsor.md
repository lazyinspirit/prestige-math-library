---
id: "lem-affine-deformations-obstruction-and-torsor"
kind: "lemma"
title: "Deformations of algebras: obstruction in degree two and torsor structure in degree one"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 14
justified_by: []
aliases: []
deps:
  - "thm-flatness-criteria-by-injections-and-ideals"
  - "thm-right-exactness-of-tensor-products"
  - "def-cotangent-complex-of-a-ring-map"
  - "lem-lichtenbaum-schlessinger-complex-and-cotangent-ext"
  - "lem-cotangent-complex-truncation-and-smooth-case"
  - "def-ext-groups-of-the-cotangent-complex"
  - "def-square-zero-extension-and-small-extension"
  - "def-flat-and-faithfully-flat-modules-and-ring-maps"
  - "def-kahler-differentials-algebra"
  - "def-derivation-algebra"
  - "thm-kahler-differentials-existence-presentation"
  - "thm-conormal-exact-sequence-algebra"
  - "def-axiom-of-choice"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
sources:
  references:
    - title: "The Stacks Project, flatness across a square-zero extension"
      url: "https://stacks.math.columbia.edu/tag/063Y"
      locator: "Lemma 37.10.1, full statement and proof; its nilpotent flatness input Lemma 10.99.8 (051C) also read in full, 2026-10-06."
    - title: "The Stacks Project, The Cotangent Complex, complete chapter (Chapter 92)"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Lemma 92.16.1 (tag 08SP) with its full proof: obstruction class in Ext^2(L_{B/A},N), torsor structure under Ext^1 and automorphisms Ext^0 for deformations of ring maps (printed pages 25-28, read 2026-10-05)"
    - title: "The Stacks Project, Deformation Theory, complete chapter (Chapter 91)"
      url: "https://stacks.math.columbia.edu/download/defos.pdf"
      locator: "Section 91.2, Lemmas 2.1-2.3 (tags 08S5, 08S7, 0GPT, 0GPU): tordeur and obstruction for deformations of rings; Section 91.8, Lemma 8.1 (tag 0D14): first-order thickenings (printed pages 3-6 and 30-33, read 2026-10-05)"
    - title: "Robin Hartshorne, Lectures on Deformation Theory (Berkeley Math 274 draft, 2004/2005)"
      url: "http://math.berkeley.edu/~robin/math274root.pdf"
      locator: "Chapter 2 Section 10 Theorem 10.1(a),(b), hypotheses and full proof (printed pages 58-61), with Remark 10.2: flat Artin-algebra lifts, obstruction and torsor. This is the small-extension specialization, not the arbitrary-N/c ring-map theorem. Read 2026-10-06."
---

## Statement

Assume the Axiom of Choice as inherited from the resolution comparisons
([[def-axiom-of-choice]]). Let $A'\to A$ be a surjective ring map with
square-zero kernel $I$ ([[def-square-zero-extension-and-small-extension]]), let
$A\to B$ be a ring map with $B$ flat over $A$
([[def-flat-and-faithfully-flat-modules-and-ring-maps]]), let $N$ be a
$B$-module and $c\colon I\to N$ an $A$-module map. Consider the problem of
finding a surjection of $A'$-algebras $B'\to B$ whose kernel is a square-zero
ideal identified with $N$ and which induces $c$; let $\mathrm{Sol}$ be the set
of isomorphism classes of solutions. Then:

1. there is a canonical element
   $\xi\in\operatorname{Ext}^2_B(L_{B/A},N)$
   ([[def-ext-groups-of-the-cotangent-complex]]) whose vanishing is necessary
   and sufficient for $\mathrm{Sol}\ne\varnothing$;
2. if $\mathrm{Sol}\ne\varnothing$, then $\mathrm{Sol}$ is a torsor (principal
   homogeneous space) under $\operatorname{Ext}^1_B(L_{B/A},N)$;
3. for a solution $B'$, the group of automorphisms of $B'$ over $B$ compatible
   with the data is canonically
   $\operatorname{Ext}^0_B(L_{B/A},N)=\operatorname{Hom}_B(\Omega_{B/A},N)=\operatorname{Der}_A(B,N)$
   ([[def-derivation-algebra]], [[def-kahler-differentials-algebra]]).

Specializing to deformations of a flat $A$-algebra $B$ over any square-zero extension
$A'\to A$ (take $N=B\otimes_AI$ and for $c$ the canonical $A$-module map
$I\to B\otimes_AI$, $i\mapsto i\cdot1$; e.g. $A$ and $A'$ local Artin
$k$-algebras and $A'\to A$ small): a flat deformation of $B$ over $A'$ exists
if and only if the obstruction class of $B$ vanishes, and then the set of
isomorphism classes of flat deformations of $B$ over $A'$ is a torsor under
$\operatorname{Ext}^1_B(L_{B/A},B\otimes_AI)$, with automorphism group
$\operatorname{Ext}^0_B(L_{B/A},B\otimes_AI)$. If $B$ is finitely presented
over $A$, every such flat lift is finitely presented over $A'$, without a finite-generation assumption on $I$.

## Facts & Assumptions

**Given:** a surjective ring map $A'\to A$ with square-zero kernel $I$, a ring map $A\to B$ with $B$ flat over $A$, a $B$-module $N$, an $A$-module map $c:I\to N$, and the Axiom of Choice.

[F1] $\operatorname{Ext}^i_B(L_{B/A},N)=H^i(\mathbf R\operatorname{Hom}_B(L_{B/A},N))$ for the ring-map cotangent complex $L_{B/A}$, a complex concentrated in degrees $\le0$; for $i=0,1,2$ these groups are computed by the Lichtenbaum-Schlessinger complex, with $T^1$ and $T^2$ as displayed in the Lichtenbaum-Schlessinger item. ([[def-ext-groups-of-the-cotangent-complex]], [[lem-lichtenbaum-schlessinger-complex-and-cotangent-ext]])

[F2] $\operatorname{Ext}^0_B(L_{B/A},N)\cong\operatorname{Hom}_B(\Omega_{B/A},N)=\operatorname{Der}_A(B,N)$, because $\tau_{\ge-1}L_{B/A}$ is the naive cotangent complex whose degree-$0$ cohomology is $\Omega_{B/A}$. ([[lem-cotangent-complex-truncation-and-smooth-case]], [[def-kahler-differentials-algebra]], [[def-derivation-algebra]])

[F3] The obstruction and torsor theorem for deformations of ring maps: for a square-zero extension $A'\to A$, an $A$-algebra $B$, a $B$-module $N$ and the prescribed map $c:I\to N$, the solutions form either the empty set or a torsor under $\operatorname{Ext}^1_B(L_{B/A},N)$ with automorphism group $\operatorname{Ext}^0_B(L_{B/A},N)$, and the obstruction is a canonical element of $\operatorname{Ext}^2_B(L_{B/A},N)$. This is Stacks, *The Cotangent Complex*, Lemma 92.16.1 (tag 08SP), with the affine case of Stacks, *Deformation Theory*, Lemmas 91.2.1-91.2.3 as its affine inputs; Hartshorne Theorem 10.1(a),(b) independently treats the flat Artin specialization. This is an exact application of the cited source theorem with the given $c$, not merely its flat specialization. ([[def-square-zero-extension-and-small-extension]])

[F4] For a polynomial presentation $R\to B$ with kernel $K$, choose a free $R$-module $F\twoheadrightarrow K$ with kernel $Q$ and Koszul relation submodule $F_0\subseteq Q$. The Lichtenbaum-Schlessinger complex has terms $Q/F_0$, $F\otimes_RB$, and $\Omega_{R/A}\otimes_RB$ in degrees $-2,-1,0$. The conormal module $K/K^2$ is the cokernel of $Q/F_0\to F\otimes_RB$, rather than its degree-$-1$ term; it is the degree-$-1$ term of the naive cotangent complex. ([[thm-kahler-differentials-existence-presentation]], [[thm-conormal-exact-sequence-algebra]], [[lem-lichtenbaum-schlessinger-complex-and-cotangent-ext]], [[lem-cotangent-complex-truncation-and-smooth-case]])

## Proof

**Proof technique:** identify the deformation problem with the deformation theory of the ring map $A\to B$, transport the Stacks 92.16 result through the Lichtenbaum-Schlessinger computation of Ext, and specialize to flat deformations.

1.1 A solution $B'\to B$ of the stated problem is exactly a deformation of the $A$-algebra $B$ over the square-zero extension $A'$, in the sense of the ring-map deformation problem of [F3]: the kernel of $B'\to B$ is a square-zero ideal identified with $N$ and the induced map $I\to N$ is $c$. Flatness of $B$ over $A$ is the hypothesis under which the problem is the correct deformation problem (a flat deformation of $B$ over $A'$ has $B=B'\otimes_{A'}A$ and $N=B\otimes_AI$). [F3, given]

1.2 Applying the obstruction theorem [F3] to this problem gives at once the canonical obstruction class $\xi\in\operatorname{Ext}^2_B(L_{B/A},N)$ of part (1), the torsor structure under $\operatorname{Ext}^1_B(L_{B/A},N)$ of part (2), and the automorphism group $\operatorname{Ext}^0_B(L_{B/A},N)$ of part (3). The identification of the automorphisms with $\operatorname{Der}_A(B,N)$ is [F2], and the identification of the $\operatorname{Ext}$ groups with the Lichtenbaum-Schlessinger $T^i$ is [F1] with the presentations of [F4]. [F1, F2, F3, F4, given]

1.3 For the flat specialization, take $N=B\otimes_AI$ and $c(i)=1\otimes i$. In a solution, multiplication induces the identity $I\otimes_AB\to N$; hence its image is the whole kernel and $B'/IB'=B$. The square-zero flatness criterion, Stacks tag 063Y (affine case), makes $B'$ flat over $A'$ since $B$ is flat over $A$. Conversely flatness identifies $IB'$ with $I\otimes_AB$, so every flat lift is a solution with this canonical kernel identification. Thus steps 1.1 and 1.2 apply to exactly the flat lifts. [F3, given]

2.1 Suppose additionally $B$ is finitely presented over $A$. Lift a finite set of algebra generators to $B'$ and map $P'=A'[t_1,\ldots,t_r]\to B'$. Its image $C$ satisfies $B'=C+IB'$; since $I^2=0$ and $C$ contains $A'$, this implies $IB'=IC\subset C$ and the map is surjective. Let $J$ be its kernel. Flatness of $B'$ gives $J\cap IP'=IJ$: a tensor in $I\otimes_{A'}P'$ whose product lies in $J$ maps to zero in $I\otimes_{A'}B'$ by injectivity of multiplication for the flat module $B'$, and right exactness lifts it from $I\otimes_{A'}J$. Hence $J/IJ$ is the kernel of $A[t_1,\ldots,t_r]\to B$, so is finitely generated. Lift its finitely many generators to $J$, with generated ideal $J_0$. Then $J/J_0=I(J/J_0)=I^2(J/J_0)=0$, so $J=J_0$ and $B'$ is finitely presented. This proves the added finiteness assertion without assuming finite generation of $I$. Choice is inherited from the cotangent and derived-Hom suppliers. [step 1.3, algebra] ∎

**Source application.** The exact source theorem Stacks tag 08SP, read with its full proof, applies to arbitrary $N$ and $c$. Its proof constructs the obstruction as the image of the extension datum under the long exact Ext sequence of the transitivity triangle; its torsor and automorphism assertions use the naive-cotangent comparison. The flat specialization additionally uses the square-zero flatness criterion: with $B$ flat over $A$ and kernel $B\otimes_AI$, the induced multiplication $I\otimes_AB\to\ker(B'\to B)$ is the identity, which is the flatness criterion for $B'$ over $A'$.
