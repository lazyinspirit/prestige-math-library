---
id: def-maximal-unramified-outside-p-iwasawa-module-over-cyclotomic-tower
kind: definition
title: The p-ramified Iwasawa module over the real cyclotomic tower
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
- def-number-field
- def-axiom-of-choice
- def-countable-choice
- def-iwasawa-algebra-of-profinite-abelian-group
- lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts
- thm-algebraic-embedding-extension
- lem-compact-pro-p-abelian-actions-extend-to-iwasawa-algebra
- lem-inertia-over-algebraic-number-field-towers-and-unramified-composita
- thm-finite-galois-extension-characterizations
- thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n
- thm-normal-subgroups-and-quotients-in-the-galois-correspondence
justified_by: []
axiom_use: AC is used for algebraic embedding extension and compact absolute-inertia
  fibres in the infinite-tower construction. Countable Choice is retained explicitly
  for arbitrary valued-field completion in its valuation-prolongation supplier. Finite-residue
  classification is used nowhere over the infinite tower.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Coates and R. Sujatha, The Main Conjecture
    url: https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download
    locator: §3, printed pp. 116–117, definition (3) and its conjugation action
  - title: J. Sharifi, Iwasawa Theory lecture notes
    url: https://math.ucla.edu/~sharifi/notes/iwasawa-ch03.html
    locator: §§3.3–3.4, p-ramified Galois modules over cyclotomic towers
verification: {}
proof_strategy: direct
---

## Definition

Assume the Axiom of Choice and Countable Choice. Let $F$ be a totally real number field, let $p$ be an odd prime, and use the towers $\mathcal F_\infty=F(\mu_{p^\infty})$, $F_\infty=\mathcal F_\infty^{\langle c\rangle}$ and group $G=\operatorname{Gal}(F_\infty/F)$ from the cyclotomic decomposition. In a fixed algebraic closure of $F_\infty$, let $M_\infty$ be the compositum of all finite abelian Galois $p$-extensions of $F_\infty$ unramified at every finite prime not above $p$. Define $Y_\infty=\operatorname{Gal}(M_\infty/F_\infty)$. The group $G$ acts on $Y_\infty$ by conjugation through any lift to $\operatorname{Gal}(M_\infty/F)$; since $Y_\infty$ is abelian, the action is independent of the lift. The **p-ramified Iwasawa module over the real cyclotomic tower** is $Y_\infty$ with this continuous action, extended to a module over $\Lambda(G)=\mathbb Z_p[\![G]\!]$.

## Definition references

[J. Coates and R. Sujatha, *The Main Conjecture*, §3, pp. 116–117](https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download)

[J. Sharifi, *Iwasawa Theory*, Chapter 3, §§3.3–3.4](https://math.ucla.edu/~sharifi/notes/iwasawa-ch03.html)

## Tower conventions

The inclusions and quotient are

$$\begin{tikzcd} F \arrow[r,hook] & F_\infty \arrow[r,hook] & \mathcal F_\infty \end{tikzcd}$$

and $\mathcal G=\operatorname{Gal}(\mathcal F_\infty/F)$ maps onto $G=\operatorname{Gal}(F_\infty/F)$ with kernel $\langle c\rangle$. Thus $Y_\infty$ is based over the real field $F_\infty$, whereas the unramified module in the next definition is based over the full field $\mathcal F_\infty$.

## Facts & Assumptions

**Given:** AC, Countable Choice, the totally real number field $F$, the odd prime $p$, and the full and real towers in the Definition.

[F1] The full cyclotomic Galois group is abelian, has finite torsion subgroup $\Delta_F$ of order dividing $p-1$, and splits as that subgroup times its pro-$p$ cyclotomic subgroup. Complex conjugation is the order-two element in that finite factor; the real Galois group is its quotient. The finite factor acts faithfully on $\mu_p$. ([[lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts]])

[F2] Under AC and Countable Choice, the absolute-inertia criterion over a union of finite Galois number-field layers agrees with actual residue-kernel inertia for every finite Galois extension. It covers every finite place and prolongation. The corresponding finite unramified abelian p-extensions are closed under composita, their maximal compositum is Galois over $F$, its kernel is compact abelian pro-$p$, and restriction to the tower group is surjective. ([[lem-inertia-over-algebraic-number-field-towers-and-unramified-composita]])

[F3] Under AC, an exact sequence of profinite groups with abelian pro-$p$ kernel and profinite abelian quotient gives continuous lift-independent conjugation and a unique continuous module structure over the quotient's completed group algebra, without choosing a section. ([[lem-compact-pro-p-abelian-actions-extend-to-iwasawa-algebra]])

[F4] A splitting field of a separable polynomial is finite Galois. The Galois group of a cyclotomic extension embeds in the abelian unit group of the relevant residue ring. A normal subgroup of a finite Galois group has a Galois fixed field with the quotient group. ([[thm-finite-galois-extension-characterizations]], [[thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n]], [[thm-normal-subgroups-and-quotients-in-the-galois-correspondence]])

[A1] AC and Countable Choice are retained exactly as in the Definition and through [F2]–[F3]; no weaker choice branch is asserted. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

1.1 Put $L_n=F(\mu_{p^n})$. It is the splitting field of the separable polynomial $X^{p^n}-1$ over the characteristic-zero field $F$, so [F4] makes it finite Galois, with abelian group by the cyclotomic embedding. Complex conjugation fixes $F$ and is central by [F1]. Hence $K_n=L_n^{\langle c\rangle}$ is finite Galois over $F$ by [F4]. These fields increase and their union is $F_\infty$: an element of the full union fixed by $c$ already lies in some $L_n$ and is fixed there, and the reverse inclusion is immediate. Thus the real tower satisfies every finite-layer hypothesis of [F2]. [F1, F4, given, construct, algebra]

2.1 Apply [F2] with $K=F_\infty$ and $S$ the finite places of $F$ above $p$. It proves closure of the defining finite abelian p-extensions under composita using actual residue kernels at every prime outside $S$. The resulting maximal compositum is exactly $M_\infty$ of the Definition, is Galois over $F$, and has compact abelian pro-$p$ kernel $Y_\infty=\operatorname{Gal}(M_\infty/F_\infty)$. Restriction gives the exact profinite sequence $1\to Y_\infty\to\operatorname{Gal}(M_\infty/F)\to G\to1$. This is an arithmetic construction over the infinite field, not a use of finite-residue classification on its completion. [F2, A1, step 1.1, construct, algebra]

3.1 By [F1], $G$ is profinite abelian. Apply [F3] to the exact sequence from step 2.1. It gives continuous conjugation through any lift and its extension to $\Lambda(G)$; two lifts differ by the abelian kernel and therefore induce the same action. This proves the full well-definedness claimed in the original Definition. No finite-generation, torsion, characteristic-ideal or main-conjecture assertion follows from this construction. [F1, F3, A1, step 2.1, algebra] ∎

## Remarks

The authentic prior finite-residue instantiation and its held successor are preserved in the native and inertia-before archives. The new proof uses finite number-field inertia-in-towers only at finite levels, together with valuation/residue unions and closed compact fibres over the infinite tower. It supplies no torsion, Deligne–Ribet, arithmetic Kummer, Wiles equality or trivial-character pole argument.
