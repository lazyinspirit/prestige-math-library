---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading, followed by recorded Step 7 current repair argument acceptance. The repair receipt records local author review; no independent repair audit is claimed. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-24.md"
      - "research/frontier-38-owner-30-alpha-batch-24-5a.md"
      - "research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u24.json"
    content_sha256: "65d63c273fd9e18cc439e2dbca163f0acf4e335e4468e6b54ad9d3f32e4dd0de"
id: lem-nonaffine-centre-is-stable-jet-kernel
kind: lemma
title: "The centre is the stable kernel of conjugation on local jets"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, thm-krull-intersection-theorem]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Proposition 8.10, p.150-151"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Brion, Some structure theorems for algebraic groups, Proposition 3.1.6 and Corollary 3.1.7"
      url: https://arxiv.org/pdf/1509.03059
---

## Statement

Assume the Axiom of Choice. Let $G$ be a smooth geometrically integral finite-type group scheme over $k$. Conjugation gives representations on $\mathcal O_{G,e}/\mathfrak m_e^{n+1}$. Their kernels stabilize for large $n$, and the stable kernel is the scheme-theoretic centre $Z(G)$.

## Facts & Assumptions

[F1] For a Noetherian local ring $(R,\mathfrak m)$, $\bigcap_{n\ge0}\mathfrak m^n=0$, by the Jacobson-radical clause of Krull intersection applied to the finite module $R$. ([[thm-krull-intersection-theorem]])

## Proof

**Given:** AC and $G$ as in the statement.

1.1 Put $R=\mathcal O_{G,e}$ and $X_n=\operatorname{Spec}(R/\mathfrak m_e^{n+1})$. These are finite subschemes of $G$: on an affine neighbourhood of $e$, localization induces the same quotient by the corresponding maximal-ideal power. Their rings are finite dimensional because $R$ is Noetherian with residue field $k$. Conjugation fixes $e$ scheme theoretically, hence preserves its ideal and every power; it therefore acts on each $X_n$. Pullback by inverse conjugation gives linear automorphisms of $R/\mathfrak m_e^{n+1}$ with regular matrix entries, defining the jet representations. Their closed scheme kernels $H_n$ descend with $n$ and stabilize to $H$, since their ideal sheaves ascend on the Noetherian scheme $G$. Every central point acts trivially on all jets, so $Z(G)\subset H$ as functors. [given, construct, algebra]

2.1 Let $a:H\times G\to G$ be conjugation and $p$ projection. The group $G$ is separated: its identity is a closed rational point, and its diagonal is the inverse image of that point under $(x,y)\mapsto x^{-1}y$. Thus the equalizer of $a,p$ is closed, with ideal sheaf $J$. For an affine chart $\operatorname{Spec}C\subset H$ and an affine neighbourhood $U=\operatorname{Spec}B$ of $e$, every section $z\in J(C\otimes_kB)$ vanishes in $C\otimes_k(R/\mathfrak m_e^{n+1})$ for all $n$, because $H$ acts trivially on all jets. Write $z=\sum_i c_i\otimes b_i$ with the finitely many $c_i$ linearly independent over $k$. Finite coefficient contractions show $b_i\in\mathfrak m_e^{n+1}R$ for every $n$. By [F1] all these coefficients vanish in $R$. Since $G$ is integral, $B\hookrightarrow R$, so $z=0$. Hence $a=p$ on $H\times U$. [F1, step 1.1, algebra]

3.1 The nonempty open $U\subset G$ is schematically dense after every $k$-algebra base change. Indeed for any nonempty affine open $W\subset G$, choose a nonempty principal open $D(b)\subset W\cap U$; integrality makes $\mathcal O(W)\hookrightarrow\mathcal O(W)_b$ injective, and tensoring over $k$ with $C$ preserves injectivity. Consequently a section of $J$ on $\operatorname{Spec}C\times W$ vanishing on $\operatorname{Spec}C\times U$ is zero. Step 2.1 therefore gives $J=0$ on all of $H\times G$. Thus conjugation by $H$ is the identity after arbitrary base change, which says $H\subset Z(G)$. Together with step 1.1 this proves equality scheme theoretically and represents the centre by the stable closed kernel $H$. AC is inherited from [F1]; no faithfulness of conjugation is assumed. [F1, step 1.1, step 2.1, algebra] ∎
