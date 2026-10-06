---
id: lem-arith-strict-henselian-etale-sections
kind: lemma
title: "Strict henselian etale sections"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - cor-henselian-local-simple-root-criterion
  - cor-idempotents-lift-uniquely-in-a-henselian-pair
  - thm-etale-locally-standard-etale
  - def-henselian-pair-and-henselian-local-ring
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), 7.3/3 (sections of etale schemes over strictly henselian rings)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the stated suppliers. Let $R$ be a strictly henselian local ring with separably closed residue field $k$ ([[def-henselian-pair-and-henselian-local-ring]]) and let $H$ be a separated etale finite-type $R$-scheme. Then:

(a) reduction induces a bijection $H(R)\to H(k)$;

(b) the union $H^{\mathrm{fin}}$ of the images of all $R$-sections of $H$ is a finite etale $R$-scheme isomorphic to a disjoint union of $d$ copies of $\operatorname{Spec}R$, where $d=|H(k)|$; it contains the whole closed fibre $H_k$, and its complement $H\setminus H^{\mathrm{fin}}$ has empty closed fibre and no $R$-sections.

## Facts & Assumptions

**Given:** AC and DC, a strictly henselian local ring $R$ with separably closed residue field $k$ and maximal ideal $\mathfrak m$, and a separated etale finite-type $R$-scheme $H$.

[F1] Etale morphisms are locally standard etale: locally on source and target, $H\to\operatorname{Spec}R$ is $\operatorname{Spec}\bigl(R[T]/(P)\bigr)_g$ with $P$ monic and $P'$ invertible on the localization ([[thm-etale-locally-standard-etale]], assuming AC).

[F2] Over a henselian local ring, a simple root of a monic polynomial lifts uniquely, and idempotents lift uniquely ([[cor-henselian-local-simple-root-criterion]], [[cor-idempotents-lift-uniquely-in-a-henselian-pair]], both assuming AC); the strictly henselian property is the henselian pair condition of [[def-henselian-pair-and-henselian-local-ring]] used through these criteria.

[F3] Here **strictly henselian** means henselian local with separably closed residue field. No DVR hypothesis or construction as a strict henselization is required; the henselian condition is that of [[def-henselian-pair-and-henselian-local-ring]].

## Proof

**Proof technique:** direct: lift points through standard etale charts, then count the disjoint section images via the etale diagonal.

1.1 Let $x\in H(k)$ and choose a standard etale chart $R[T]/(P)$ localized at $g$ around $x$ as in [F1]. The image of the chart in $\operatorname{Spec}R$ is an open neighbourhood of the image point, which is the closed point of the local scheme $\operatorname{Spec}R$; hence it is all of $\operatorname{Spec}R$. Write $a$ for the residue class of $T$ at $x$; it is a simple root of the monic polynomial $P$ because $P'$ is invertible on the chart. By the simple-root lifting criterion [F2] there is a lift $a\in R$ with $P(a)=0$ and $g(a)\notin\mathfrak m$, so evaluation at $a$ defines an $R$-section of the chart and hence of $H$ reducing to $x$. Thus $H(R)\to H(k)$ is surjective. [F1, F2, F3, given, construct]

2.1 Two sections $s,t$ of $H$ with equal reduction have equalizer $\operatorname{Eq}(s,t)\subseteq\operatorname{Spec}R$; the diagonal of an etale morphism is an open immersion, so it is open, and $H$ separated over $R$ makes it closed, while it contains the closed point by hypothesis; since $\operatorname{Spec}R$ is connected (it is a local scheme), the equalizer is all of $\operatorname{Spec}R$, so $s=t$. Hence reduction $H(R)\to H(k)$ is injective, and with step 1.1 it is bijective; this proves (a). [F1, F2, step 1.1, algebra]

3.1 For a section $s:\operatorname{Spec}R\to H$, its image is open, being the base change of the etale diagonal, and closed because $s$ is a closed immersion as a section of the separated morphism $H\to\operatorname{Spec}R$. Two distinct sections have disjoint images: their equalizer is open and closed by the same argument as in step 2.1, and it is empty because it is a proper closed subset of the connected scheme $\operatorname{Spec}R$ (it misses the closed point since the sections have distinct reductions by the bijection of step 2.1). Hence the images of the $d$ sections, one for each point of the finite set $H(k)$, form $d$ disjoint open and closed subschemes each isomorphic to $\operatorname{Spec}R$ via $s$. [F2, step 2.1, construct]

4.1 Since $H$ is etale and finite type over the field $k$, the closed fibre $H_k$ is a disjoint union of finitely many copies of $\operatorname{Spec}k$ (finite separable extensions of the separably closed field $k$ are trivial), so the closed fibre is covered by the closed points $H(k)$, and $H_k\subseteq H^{\mathrm{fin}}$. Hence $H^{\mathrm{fin}}$, the disjoint union of the $d$ section images, is finite etale over $R$, and every section of $H$ meets $H_k$ and therefore lies in $H^{\mathrm{fin}}$; the complement $H\setminus H^{\mathrm{fin}}$ has empty closed fibre and admits no $R$-section. This proves (b). [F1, F3, step 3.1, algebra] ∎ 