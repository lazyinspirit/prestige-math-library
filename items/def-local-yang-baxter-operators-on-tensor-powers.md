---
id: def-local-yang-baxter-operators-on-tensor-powers
kind: definition
title: "Local Yang–Baxter operators on tensor powers"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [def-yang-baxter-operator-on-an-object, thm-mac-lane-strictification, thm-mac-lane-coherence-in-the-canonical-map-form]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.2 Remark 8.2.5 (the assignment $\\sigma_i\\mapsto1^{\\otimes(i-1)}\\otimes c_{V,V}\\otimes1^{\\otimes(n-i-1)}$), printed p. 198"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $\mathcal C$ be a monoidal category, let $X\in\mathcal C$, let $R$ be a
Yang–Baxter operator on $X$ ([[def-yang-baxter-operator-on-an-object]]), and
let $n\ge2$. Write $X^{\otimes n}$ for the **left-nested tensor power**:
$X^{\otimes0}:=\mathbf 1$, $X^{\otimes1}:=X$ and
$X^{\otimes(k+1)}:=X^{\otimes k}\otimes X$ for $k\ge1$; write
$1_X^{\otimes k}$ for the $k$-fold tensor power of $\operatorname{id}_X$.

Work first in a strict model $\mathcal C'$ of $\mathcal C$, obtained from a
monoidal equivalence as in [[thm-mac-lane-strictification]], and let
$R'\colon X'\otimes X'\to X'\otimes X'$ be the transported Yang–Baxter
operator. The **local Yang–Baxter operators** are the automorphisms of the
$n$-fold tensor power

$$R_i:=1_X^{\otimes(i-1)}\otimes R\otimes1_X^{\otimes(n-i-1)}\in \operatorname{Aut}_{\mathcal C}(X^{\otimes n}),\qquad 1\le i\le n-1 ,$$

where in the strict model the display is literal and each $R_i$ is the
endomorphism of $X'^{\otimes n}$ acting as $R'$ on the $i$-th and $(i+1)$-st
tensor factors and as the identity elsewhere.

Outside the strict model the same operators are obtained by conjugating the
displayed word with canonical associativity isomorphisms: the composite

$$X^{\otimes n}\xrightarrow{\ \kappa\ }X^{\otimes(i-1)}\otimes(X\otimes X)\otimes X^{\otimes(n-i-1)}\xrightarrow{\ 1^{\otimes(i-1)}\otimes R\otimes1^{\otimes(n-i-1)}\ }X^{\otimes(i-1)}\otimes(X\otimes X)\otimes X^{\otimes(n-i-1)}\xrightarrow{\ \kappa^{-1}\ }X^{\otimes n},$$

where $\kappa$ is any canonical morphism between the two parenthesised tensor
words built from associators and unitors, is independent of the chosen
$\kappa$ by Mac Lane coherence in canonical-map form
([[thm-mac-lane-coherence-in-the-canonical-map-form]]), and it is this
composite that defines $R_i$ in $\mathcal C$.

Each $R_i$ is invertible, with inverse
$1_X^{\otimes(i-1)}\otimes R^{-1}\otimes1_X^{\otimes(n-i-1)}$ (respectively its
bracket-corrected conjugate): the displayed inverse is a two-sided inverse of
the displayed word in the strict model, and conjugation by $\kappa$ preserves
the inverse relation.
