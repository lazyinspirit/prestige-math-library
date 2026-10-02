---
id: cor-the-pure-braid-extension-splits
kind: corollary
title: "The pure braid extension splits as a semidirect product"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [thm-pure-braid-forgetting-a-strand-short-exact-sequence, lem-the-planar-forgetful-map-has-a-continuous-section, thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products, thm-splitting-lemma-for-group-extensions, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, thm-induced-fundamental-group-map-functoriality, lem-path-conjugation-isomorphism-of-fundamental-groups]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 2.1, printed pp. 11-14 (splitting of the pure braid sequence by the explicit cross-section)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3, author manuscript pp. 5-7"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Statement

Assume the Axiom of Choice and let $n\ge2$, with the notation
$PB_n$, $PB_{n-1}$, $F_{n-1}$ and the forgetful homomorphism $\varphi$ of
[[thm-pure-braid-forgetting-a-strand-short-exact-sequence]]. Then the section
of the planar forgetful map from
[[lem-the-planar-forgetful-map-has-a-continuous-section]], adjusted at the
basepoint by a path in the puncture fibre, induces a group homomorphism
$$s:PB_{n-1}\longrightarrow PB_n\qquad\text{with}\qquad \varphi\circ s=\operatorname{id}_{PB_{n-1}},$$
and consequently the extension splits:
$$PB_n\cong F_{n-1}\rtimes PB_{n-1},$$
the semidirect product formed with the action of $PB_{n-1}$ on the free kernel
$F_{n-1}$ given by conjugation with the chosen section,
$g\cdot x=s(g)\,x\,s(g)^{-1}$. The action depends on the chosen section and the
path that adjusts it; no trivial action and no direct-product decomposition are
asserted.

## Facts & Assumptions

**Given:** the Axiom of Choice, an integer $n\ge2$, a base configuration $q=(q_1,\dots,q_n)\in F_n(\operatorname{int}D^2)$ with $q'=(q_1,\dots,q_{n-1})$, and the fibre $M_{n-1}=\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\}$ of the last-coordinate forgetful map.

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[F1] In ZF, AC implies DC ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] Under AC the forgetful map $\varphi:PB_n\to PB_{n-1}$ of the closed-disc convention sits in the short exact sequence $1\to F_{n-1}\xrightarrow{\kappa}PB_n\xrightarrow{\varphi}PB_{n-1}\to1$, where $\kappa$ is induced by the inclusion $x\mapsto(q_1,\dots,q_{n-1},x)$ of the fibre and $\varphi$ is induced by forgetting the last coordinate; in the open-disc model these maps are $i_*$ and $p_*$ for the fibration $p:F_n(\operatorname{int}D^2)\to F_{n-1}(\operatorname{int}D^2)$, and the inclusion $\iota^F_*$ identifies the two models ([[thm-pure-braid-forgetting-a-strand-short-exact-sequence]]).

[F3] For $n\ge2$, every path $\alpha$ in $M_{n-1}$ from $q$ to the value $s'(q')$ of the transported planar section induces by path conjugation a homomorphism $\sigma:\pi_1(F_{n-1}(\operatorname{int}D^2),q')\to\pi_1(F_n(\operatorname{int}D^2),q)$ with $p_*\circ\sigma=\operatorname{id}$, and the conjugation isomorphism is the one of [[lem-path-conjugation-isomorphism-of-fundamental-groups]]; the construction uses no choice principle ([[lem-the-planar-forgetful-map-has-a-continuous-section]]).

[F4] For a short exact sequence $1\to N\xrightarrow{i}G\xrightarrow{\pi}H\to1$: a homomorphic section $s:H\to G$ of $\pi$ exists exactly when the extension splits, exactly when $G\cong(\ker\pi)\rtimes H$ compatibly with the injection and quotient, and for a given section the action is $h\cdot x=s(h)xs(h)^{-1}$ ([[thm-splitting-lemma-for-group-extensions]]).

[F5] For a group extension $1\to N\to E\to Q\to1$ that admits a homomorphic section, the extension is equivalent to $1\to N\to N\rtimes Q\to Q\to1$ for the corresponding action ([[thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products]]).

[F6] Induced maps on fundamental groups are functorial, $(g\circ f)_*=g_*\circ f_*$, and for the inclusions and forgetful maps of the two models the identity $p^D\circ\iota^F=\iota^F\circ p$ of maps holds because both sides forget the last coordinate ([[thm-induced-fundamental-group-map-functoriality]]).

## Proof

**Proof technique:** direct.

1.1 **Choice bookkeeping.** By [F1] the Axiom of Choice [A1] yields DC, so the short exact sequence of [F2] is available; the explicit section itself is choice-free and AC enters only through that published sequence. [A1, F1]

1.2 **The based section in the open model.** Fix a path $\alpha$ in $M_{n-1}$ from $q$ to $s'(q')$, which exists by [F3] and is a single selection, not an instance of AC; by [F3] the resulting homomorphism $\sigma:\pi_1(F_{n-1}(\operatorname{int}D^2),q')\to\pi_1(F_n(\operatorname{int}D^2),q)$ satisfies $p_*\circ\sigma=\operatorname{id}$. [F3]

1.3 **The short exact sequence.** By [F2] the sequence $1\to F_{n-1}\xrightarrow{\kappa}PB_n\xrightarrow{\varphi}PB_{n-1}\to1$ is exact, and the isomorphisms $\iota^F_*$ transport the open-disc maps $i_*$, $p_*$ to $\kappa$, $\varphi$. [F2]

1.4 **The splitting criterion.** By [F4] a homomorphic section of $\varphi$ exists exactly when the extension splits, exactly when $PB_n\cong F_{n-1}\rtimes PB_{n-1}$ compatibly with $\kappa$ and $\varphi$, with action $g\cdot x=s(g)xs(g)^{-1}$ for a given section; by [F5] the same conclusion is the semidirect-product model of the split extension. [F4, F5]

1.5 **Naturality of the transport.** Both $p^D$ and $p$ forget the last coordinate, so $p^D\circ\iota^F=\iota^F\circ p$ as maps; by the functoriality [F6] the induced maps satisfy $p^D_*\circ\iota^F_*=\iota^F_*\circ p_*$ on fundamental groups at configurations of interior points. [F6]

2.1 **A section for $\varphi$.** Define $s:PB_{n-1}\to PB_n$ by $s:=\iota^F_*\circ\sigma\circ(\iota^F_*)^{-1}$, where $\iota^F_*$ is the isomorphism of [F2] at the relevant configurations. Then $\varphi\circ s=p^D_*\circ\iota^F_*\circ\sigma\circ(\iota^F_*)^{-1}=\iota^F_*\circ p_*\circ\sigma\circ(\iota^F_*)^{-1}=\iota^F_*\circ(\iota^F_*)^{-1}=\operatorname{id}_{PB_{n-1}}$, using the naturality of step 1.5 and $p_*\circ\sigma=\operatorname{id}$ from step 1.2; being a composite of group homomorphisms, $s$ is a homomorphism. [step 1.2, step 1.3, step 1.5]

3.1 **The semidirect product.** Step 2.1 exhibits a homomorphic section of $\varphi$, so the criterion of [F4] applies and the extension of [F2] splits with $PB_n\cong F_{n-1}\rtimes PB_{n-1}$ and action $g\cdot x=s(g)xs(g)^{-1}$. The decomposition is built from the particular section $s$ and the particular path $\alpha$, both non-canonical: choosing another path or another section changes the action by an inner automorphism of $F_{n-1}$ in general, and no trivial action, direct product, or independence-of-choice statement is asserted. [step 1.4, step 2.1]

The section is the based version of the explicit planar cross-section, the extension is the published choice-dependent Fadell–Neuwirth sequence, and no claim is made that the splitting is canonical. ∎
