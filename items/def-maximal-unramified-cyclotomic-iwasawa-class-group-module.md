---
id: def-maximal-unramified-cyclotomic-iwasawa-class-group-module
kind: definition
title: The unramified Iwasawa module over the full cyclotomic tower
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
- def-maximal-unramified-outside-p-iwasawa-module-over-cyclotomic-tower
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
    locator: §3, printed pp. 116–118, definition (4) and eigenspace decomposition
  - title: J. Sharifi, Iwasawa Theory lecture notes
    url: https://math.ucla.edu/~sharifi/notes/iwasawa-ch03.html
    locator: §§3.3–3.4, unramified cyclotomic module and character components
verification: {}
proof_strategy: direct
---

## Definition

Assume the Axiom of Choice and Countable Choice. Let $F$ be a totally real number field, let $p$ be an odd prime, and let $\mathcal F_\infty=F(\mu_{p^\infty})$ and $\mathcal G=\operatorname{Gal}(\mathcal F_\infty/F)$ be the full cyclotomic tower and its Galois group. In a fixed algebraic closure of $\mathcal F_\infty$, let $L_\infty$ be the compositum of all finite abelian Galois $p$-extensions of $\mathcal F_\infty$ unramified at every finite prime. Define $X_\infty=\operatorname{Gal}(L_\infty/\mathcal F_\infty)$, with the continuous conjugation action of $\mathcal G$ induced by lifts to $\operatorname{Gal}(L_\infty/F)$. Let $\Delta_F$ be the finite torsion subgroup of $\mathcal G$, identified by restriction with $\operatorname{Gal}(F(\mu_p)/F)$, and let $\omega_F$ be the cyclotomic character restricted to $\Delta_F$. For each integer $j$, define $X_\infty^{(j)}=e_{\omega_F^j}X_\infty$, where $e_{\omega_F^j}=|\Delta_F|^{-1}\sum_{\tau\in\Delta_F}\omega_F^j(\tau)^{-1}\tau$ is the corresponding idempotent in $\mathbb Z_p[\Delta_F]$. The **unramified Iwasawa module over the full cyclotomic tower** is $X_\infty$ with this action.

## Definition references

[J. Coates and R. Sujatha, *The Main Conjecture*, §3, pp. 116–118](https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download)

[J. Sharifi, *Iwasawa Theory*, Chapter 3, §§3.3–3.4](https://math.ucla.edu/~sharifi/notes/iwasawa-ch03.html)

## Facts & Assumptions

**Given:** AC, Countable Choice, the totally real number field $F$, the odd prime $p$, and the full and real towers in the Definition.

[F1] The full cyclotomic Galois group is abelian, has finite torsion subgroup $\Delta_F$ of order dividing $p-1$, and splits as that subgroup times its pro-$p$ cyclotomic subgroup. Complex conjugation is the order-two element in that finite factor; the real Galois group is its quotient. The finite factor acts faithfully on $\mu_p$. ([[lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts]])

[F2] Under AC and Countable Choice, the absolute-inertia criterion over a union of finite Galois number-field layers agrees with actual residue-kernel inertia for every finite Galois extension. It covers every finite place and prolongation. The corresponding finite unramified abelian p-extensions are closed under composita, their maximal compositum is Galois over $F$, its kernel is compact abelian pro-$p$, and restriction to the tower group is surjective. ([[lem-inertia-over-algebraic-number-field-towers-and-unramified-composita]])

[F3] Under AC, an exact sequence of profinite groups with abelian pro-$p$ kernel and profinite abelian quotient gives continuous lift-independent conjugation and a unique continuous module structure over the quotient's completed group algebra, without choosing a section. ([[lem-compact-pro-p-abelian-actions-extend-to-iwasawa-algebra]])

[F4] A splitting field of a separable polynomial is finite Galois. The Galois group of a cyclotomic extension embeds in the abelian unit group of the relevant residue ring. A normal subgroup of a finite Galois group has a Galois fixed field with the quotient group. ([[thm-finite-galois-extension-characterizations]], [[thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n]], [[thm-normal-subgroups-and-quotients-in-the-galois-correspondence]])

[A1] AC and Countable Choice are retained exactly as in the Definition and through [F2]–[F3]; no weaker choice branch is asserted. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

1.1 Put $K_n=F(\mu_{p^n})$. By [F4] these are increasing finite Galois extensions of $F$, and their union is $\mathcal F_\infty$. Thus the full tower satisfies the finite-layer hypotheses of [F2]. Apply that result with $S=\varnothing$: every finite prime is included, including all primes above $p$. The finite unramified abelian p-extensions are closed under composita, and their maximal compositum is exactly $L_\infty$ in the Definition. It is Galois over $F$ and $X_\infty=\operatorname{Gal}(L_\infty/\mathcal F_\infty)$ is compact abelian pro-$p$. [F2, F4, A1, given, construct, algebra]

2.1 The restriction sequence is $1\to X_\infty\to\operatorname{Gal}(L_\infty/F)\to\mathcal G\to1$ by [F2]. Its quotient $\mathcal G$ is abelian by [F1]. Hence [F3] supplies continuous, lift-independent conjugation and its completed-group-algebra action. No choice of a continuous section is made. [F1, F2, F3, A1, step 1.1, algebra]

3.1 Write $\delta=|\Delta_F|$, so $p\nmid\delta$ by [F1]; its inverse in $\mathbb Z_p$ is given by its compatible inverses modulo $p^n$. The character $\omega_F$ identifies this cyclic factor with a subgroup of $\mu_{p-1}(\mathbb Z_p)$ and its reduction modulo $p$ is faithful, because the factor acts faithfully on $\mu_p$ by [F1]. For a nontrivial character $\theta=\omega_F^a$ of $\Delta_F$, choose a generator $d$ of that cyclic group; faithfulness modulo $p$ gives $\theta(d)\ne1\pmod p$, so $\theta(d)-1$ has nonzero residue modulo $p$ and is a unit. Multiplication of $\sum_{a\in\Delta_F}\theta(a)$ by $\theta(d)$ permutes its terms, so the sum is zero. For the trivial character it is $\delta$. Applying these finite orthogonality sums to the coefficients of $e_{\omega_F^j}e_{\omega_F^k}$ gives zero for $j\not\equiv k\pmod\delta$ and $e_{\omega_F^j}$ for equal indices; the same geometric sums over the cyclic character powers give $\sum_{j\bmod\delta}e_{\omega_F^j}=1$. Thus the integral idempotents in the Definition act on the module of step 2.1 and define its stated character submodules. The full construction and eigenspace notation are well defined; no torsion theorem or Kummer comparison has been assumed. [F1, step 2.1, construct, algebra] ∎

## Remarks

The authentic prior finite-residue instantiation and its held successor are preserved in the native and inertia-before archives. The new proof uses finite number-field inertia-in-towers only at finite levels, together with valuation/residue unions and closed compact fibres over the infinite tower. It supplies no torsion, Deligne–Ribet, arithmetic Kummer, Wiles equality or trivial-character pole argument.
