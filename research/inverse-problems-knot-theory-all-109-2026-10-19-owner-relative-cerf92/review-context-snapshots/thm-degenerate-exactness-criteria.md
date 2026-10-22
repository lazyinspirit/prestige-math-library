---
id: thm-degenerate-exactness-criteria
kind: theorem
title: "Degenerate exactness criteria"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-exact-sequence-and-short-exact-sequence-in-an-abelian-category,
       def-exactness-at-a-node,
       cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero,
       cor-equalizers-are-monic-and-coequalizers-are-epic,
       thm-every-monomorphism-is-the-kernel-of-its-cokernel]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Freyd, Abelian Categories, Proposition 2.22"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3abs.html"
    - title: "David Mehrle, Category Theory, Part III, Remark 7.21"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: frontier-23
---

## Statement

In an abelian category:

1. $0 \to K \xrightarrow{u} A$ is exact if and only if $u$ is monic.
2. $0 \to K \xrightarrow{u} A \xrightarrow{v} B$ is exact if and only if $u$ is
   a kernel of $v$.
3. $A \xrightarrow{v} B \xrightarrow{w} C \to 0$ is exact if and only if $w$ is
   a cokernel of $v$.
4. $0 \to A \xrightarrow{u} B \xrightarrow{v} C \to 0$ is exact if and only if
   $u$ is monic and $v$ is a cokernel of $u$, equivalently if and only if $u$
   is a kernel of $v$ and $v$ is epic.

## Facts & Assumptions

**Given:** Morphisms in an abelian category as displayed in the statement.

[L1] Exactness of the displayed sequences is the sequence notion of [[def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]].

[L2] Exactness at a node means image equals kernel, equivalently cokernel equals coimage ([[def-exactness-at-a-node]]).

[L3] Monomorphisms are exactly the zero-kernel morphisms, and epimorphisms are exactly the zero-cokernel morphisms ([[cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero]]).

[L4] Equalizers are monic and coequalizers are epic ([[cor-equalizers-are-monic-and-coequalizers-are-epic]]).

[L5] Every monomorphism is the kernel of its cokernel, and dually every epimorphism is the cokernel of its kernel ([[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 Exactness of $0 \to K \xrightarrow{u} A$ says that the kernel of $u$ is the zero subobject, and [L3] identifies that with $u$ being monic. This proves claim 1. [L1, L2, L3]

1.2 For claim 3, first assume $A \xrightarrow{v} B \xrightarrow{w} C \to 0$ is exact. Exactness at $C$ says the cokernel of $w$ is zero, so [L3] makes $w$ epic. Exactness at $B$ gives $[\operatorname{coker}(v)] = [\operatorname{coim}(w)]$ by [L2]. Because $w$ is epic, [L5] says that $w$ itself represents $\operatorname{coim}(w)$. Hence $w$ is a cokernel of $v$. Conversely, if $w$ is a cokernel of $v$, then [L4] makes $w$ epic, so exactness at $C$ follows from [L3]. Also $w$ itself represents $\operatorname{coim}(w)$, so exactness at $B$ is exactly [L2]. This proves claim 3. [L2, L3, L4, L5]

2.1 For claim 2, first assume $0 \to K \xrightarrow{u} A \xrightarrow{v} B$ is exact. By step 1.1, $u$ is monic. Exactness at $A$ gives $[\operatorname{im}(u)] = [\ker(v)]$ by [L2], and for a monomorphism the image representative is $u$ itself. Hence $u$ represents the same subobject as a kernel of $v$, so $u$ is a kernel of $v$. Conversely, if $u$ is a kernel of $v$, then $u$ is monic by [L4] and therefore exactness at $K$ follows from step 1.1. Since $u$ itself represents $\ker(v)$, exactness at $A$ is exactly [L2]. This proves claim 2. [L2, L4, step 1.1]

2.2 If $u$ is monic and $v$ is a cokernel of $u$, then step 1.1 gives exactness of $0 \to A \xrightarrow{u} B$, and claim 3 gives exactness of $A \xrightarrow{u} B \xrightarrow{v} C \to 0$. Hence the full sequence is short exact. [step 1.1, step 1.2]

3.1 If $0 \to A \xrightarrow{u} B \xrightarrow{v} C \to 0$ is short exact, then claims 2 and 3 give that $u$ is a kernel of $v$ and $v$ is a cokernel of $u$. [step 2.1, step 1.2]

3.2 If $u$ is a kernel of $v$ and $v$ is epic, then claim 2 gives exactness of $0 \to A \xrightarrow{u} B \xrightarrow{v} C$, and [L3] turns the epicity of $v$ into exactness at $C$. Hence the full sequence is short exact. [L3, step 2.1]

4.1 Steps 3.1, 2.2, and 3.2 prove claim 4. [step 3.1, step 2.2, step 3.2] ∎
