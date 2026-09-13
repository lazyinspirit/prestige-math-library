---
id: ex-second-main-theorem-at-u-equals-one
kind: example
title: The Second Main Theorem at u=1 is block-diagonal decomposition
status: draft
origin: pipeline
deps: [def-generalized-decomposition-numbers, def-brauer-subsection, thm-brauer-second-main-theorem, prop-decomposition-matrix-is-block-diagonal-after-block-ordering, def-algebraically-closed-field, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Meierfrankenfeld, MTH 912 Class Notes, Theorem 6.7.15 and Corollary 6.7.16, pp. 169–171"
      url: "https://web.archive.org/web/20220618221643id_/https://users.math.msu.edu/users/meierfra/Classnotes/MTH912F04/912F04master.pdf"
    - title: "Craven, The Brauer Correspondence, section 1.5, pp. 13–14"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf"
---

## Example

Assume the Axiom of Choice. Let $(K,\mathcal O,k)$ be a splitting
$p$-modular system for a finite group $G$, with $k$ algebraically closed.
At $u=1$ one has
$$ C_G(u)=G,\qquad d^1_{\chi,\varphi}=d_{\chi,\varphi}, \qquad c^G=c$$
for every ordinary irreducible $\chi$, irreducible Brauer character
$\varphi$, and block $c$ of $kG$. Consequently Brauer's Second Main Theorem
specializes to
$$ d_{\chi,\varphi}=0 \quad\text{unless }\chi\text{ and }\varphi\text{ belong to the same block},$$
which is precisely block diagonality of the ordinary decomposition matrix.

## Facts & Assumptions

**Given:** AC and the modular system and characters in the Example.

[F1] The explicit generalized-decomposition formula is
[[def-generalized-decomposition-numbers]].

[F2] For $u=1$, the subsection convention uses block induction from $G$ to
itself ([[def-brauer-subsection]]).

[F3] Brauer's Second Main Theorem gives generalized-decomposition support
([[thm-brauer-second-main-theorem]]), under the algebraically closed
residue-field and AC hypotheses ([[def-algebraically-closed-field]] and
[[def-axiom-of-choice]]).

[F4] Ordinary decomposition matrices are independently known to be block
diagonal ([[prop-decomposition-matrix-is-block-diagonal-after-block-ordering]]).

## Verification

1.1 For $u=1$, restriction from $G$ to $C_G(1)=G$ leaves $\chi$ as its sole ordinary constituent with multiplicity one. The scalar by which $1$ acts is $1$. Substitution in F1 gives $$d^1_{\chi,\varphi}=d_{\chi,\varphi}.$$ [F1]

2.1 Block induction from a group to itself is the identity in F2, so $c^G=c$. Apply F3: if $d_{\chi,\varphi}=d^1_{\chi,\varphi}$ is nonzero, the local block $c$ of $\varphi$ equals the global block of $\chi$. This is exactly the off-block vanishing in F4. [F2, F3, F4, step 1.1]

3.1 Conversely, F4 verifies this boundary specialization independently of the Second Main Theorem. The calculation does not say that every within-block entry is nonzero. Algebraic closedness and AC are used only to invoke F3; steps 1.1–2.1 themselves are finite substitutions. [F3, F4] ∎
