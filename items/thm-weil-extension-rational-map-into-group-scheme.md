---
id: thm-weil-extension-rational-map-into-group-scheme
kind: theorem
title: "Weil's extension theorem for rational maps into smooth separated group schemes"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-s-dense-open-and-s-rational-map
  - lem-s-rational-map-descends-along-faithfully-flat-smooth-maps
  - lem-rational-map-to-affine-target-indeterminacy-pure-codimension-one
  - def-group-scheme-over-a-scheme
  - def-smooth-morphism-schemes
  - def-separated-morphism-schemes
  - def-locally-noetherian-and-noetherian-scheme
  - lem-smooth-fibres-smooth
  - def-fibre-product-schemes-universal-property
  - thm-krull-height-theorem
  - lem-ag-flat-local-regularity-ascent-descent
  - thm-ag-standard-smooth-geometric-regularity
  - thm-nonaffine-regular-local-ring-is-ufd
  - thm-krull-principal-ideal-theorem
  - thm-regular-local-rings-are-normal
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 4.4/1 (Weil extension, regular base specialization)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice, inherited from the descent and purity suppliers. Let $S$ be a regular Noetherian base scheme ([[def-locally-noetherian-and-noetherian-scheme]]), let $Z$ be a smooth $S$-scheme, and let $G$ be a smooth separated $S$-group scheme of finite type ([[def-group-scheme-over-a-scheme]], [[def-smooth-morphism-schemes]], [[def-separated-morphism-schemes]]). If an $S$-rational map $u:Z\dashrightarrow G$ ([[def-s-dense-open-and-s-rational-map]]) is defined in codimension at most one, that is, at every height-one point of $Z$, then $u$ is defined everywhere and extends uniquely to an $S$-morphism $Z\to G$.

## Facts & Assumptions

**Given:** AC and DC, a regular Noetherian base $S$, a smooth $S$-scheme $Z$, a smooth separated finite-type $S$-group scheme $G$, and an $S$-rational map $u:Z\dashrightarrow G$ with domain $U$ containing every height-one point of $Z$.

[F1] Domains of $S$-rational maps and their behaviour under flat and faithfully flat base change are [[def-s-dense-open-and-s-rational-map]] and [[lem-s-rational-map-descends-along-faithfully-flat-smooth-maps]].

[F2] The indeterminacy locus of a rational map into an affine scheme over a normal Noetherian base is empty or of pure codimension one ([[lem-rational-map-to-affine-target-indeterminacy-pure-codimension-one]], assuming AC).

[F3] A regular local ring is a UFD and a normal domain, Krull's principal ideal theorem holds, and smoothness over a regular base yields regular local rings of the total space with geometrically regular fibres ([[thm-nonaffine-regular-local-ring-is-ufd]], [[thm-regular-local-rings-are-normal]], [[thm-krull-principal-ideal-theorem]], [[lem-ag-flat-local-regularity-ascent-descent]], [[thm-ag-standard-smooth-geometric-regularity]], [[lem-smooth-fibres-smooth]], [[def-fibre-product-schemes-universal-property]]).

## Proof

**Proof technique:** direct: analyse the difference map near the diagonal, then descend along a faithfully flat projection.

1.1 Work locally on $S$ and $Z$, with $S$ affine and $Z$ of finite type, so the finite-type descent lemma [F1] applies. The total spaces $Z$ and $Z\times_SZ$ are regular by [F3]. Form $v(z_1,z_2)=u(z_1)u(z_2)^{-1}$ on $U\times_SU$ and let $V$ be its maximal domain. On $V\cap\Delta_Z$, $v$ is the unit: it is the unit on the dense open $U\subset\Delta_Z$, so separatedness gives equality wherever both morphisms are defined. [F1, F3, given, construct]

2.1 Suppose $x\in\Delta_Z\setminus V$, with image $s\in S$. Choose an affine open $H\subset G$ containing $e(s)$ and shrink around $s$ so $e$ lands in $H$. Choose an integral regular affine neighbourhood $W$ of $x$ in $Z\times_SZ$. The open $V\cap W\cap v^{-1}(H)$ is nonempty: every neighbourhood of $x$ meets $\Delta_Z\cap U$, where $v=e$. It is therefore dense in $W$ and represents an ordinary rational map $v':W\dashrightarrow H$. Let $V'$ be its maximal domain. Then $V'\subset V\cap W$, and $V'\cap\Delta_Z=V\cap W\cap\Delta_Z$, since at a diagonal point where $v$ is defined its value lies in $H$. By [F2], $F'=W\setminus V'$ is pure codimension one. Its intersection with the diagonal is contained in $\Delta_Z\setminus U$, which has codimension at least two in $\Delta_Z$. [F1, F2, step 1.1, algebra]

3.1 At $x$ the reduced support of $F'$ is cut out by a product $f$ of prime elements in the regular local UFD $\mathcal O_{W,x}$. Its restriction to the regular local ring of the diagonal is nonzero, because $U$ is dense in the diagonal, and is a nonunit, because $x\in F'$. The principal ideal theorem [F3] then gives a codimension-one component of $F'\cap\Delta_Z$ locally at $x$, contradicting step 2.1. Hence $V$ contains the diagonal. [F2, F3, step 2.1, algebra]

4.1 Put $Z'=V\cap(Z\times_SU)$. Its first projection $f:Z'\to Z$ is flat, as a restriction of a smooth projection. For every geometric point $z$ of $Z$, the open $V_z$ in the corresponding fibre of the second factor contains the diagonal point and is nonempty; it meets the fibrewise dense open $U$, so $f$ is surjective. Thus $f$ is faithfully flat, and $(z_1,z_2)\mapsto v(z_1,z_2)u(z_2)$ on $Z'$ represents $u\circ f$ everywhere. Both $Z'$ and $Z$ are smooth of finite type over the locally Noetherian base in this local calculation, so [F1] descends it to a morphism $Z\to G$. These local extensions glue uniquely, since they agree on the schematically dense domain of $u$ and $G$ is separated. [F1, step 3.1, algebra] ∎
