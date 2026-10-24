---
id: ex-defect-one-first-main-theorem-boundary
kind: example
title: The trivial-defect-group and identity-normalizer boundaries
deps: ["thm-brauer-first-main-theorem", "thm-defect-zero-blocks-are-simple-algebras", "def-induced-block-from-a-subgroup"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Martínez, Representation Theory of Finite Groups, Theorem 4.10, pp. 27–28
      url: https://www.uv.es/jomimar8/pdfs/course%20notes.pdf
    - title: Farrell–Lassueur, Modular Representation Theory of Finite Groups, Theorem
        40.4, §40 (printed pp.8–12 of upload17)
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload17.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Example

For $D=1$, one has $N_G(D)=G$, and Brauer's First Main Theorem is the identity bijection on defect-zero blocks. More generally, if $N_G(D)=G$, its defect-$D$ bijection is the identity, including when the relevant set is empty. No AC is required.

## Facts & Assumptions

**Given:** A finite group and splitting residue field of characteristic $p$, with a fixed $p$-subgroup $D$.

[F1] [[thm-brauer-first-main-theorem]] specifies the fixed-defect bijection by induction.

[F2] [[thm-defect-zero-blocks-are-simple-algebras]] identifies trivial-defect blocks with full matrix blocks, each having one projective simple module.

[F3] [[def-induced-block-from-a-subgroup]] uses the unique block containing the block-bimodule restriction summand.

## Proof

1.1 If $N_G(D)=G$, restriction from $G\times G$ to itself changes no module. A block bimodule $B$ occurs in itself. It cannot occur in another block $B'$: the central idempotent of $B$ acts as identity on $B$ and as zero on $B'$, hence on all its summands. Thus F3 gives $B^G=B$, and F1's map and inverse are the identity on the set of blocks with defect group $D$. This proves both directions of the correspondence directly. [F1, F3, algebra]

2.1 For $D=1$, every group element normalizes $D$, so step 1.1 applies. The numerical defect is $\log_p|D|=0$, and F2 says exactly these blocks are full matrix algebras with one projective simple module. If there are no such blocks, the identity has empty domain and codomain: its injectivity condition and the assertion that every codomain element has a preimage are both vacuous. The same reasoning handles an empty defect-$D$ set whenever $D$ is normal. The zero algebra is not inserted as a block. All these identity and idempotent calculations are choice-free. [F2, step 1.1, algebra] ∎
