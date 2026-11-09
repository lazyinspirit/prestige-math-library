---
id: thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input
kind: theorem
title: External prime-field cdh comparison and cdh dimension bound
status: draft
domain: mathematics
deps:
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - lem-author-b747b28c359f-derived-cohomology
dependency_roles:
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  lem-author-b747b28c359f-derived-cohomology: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
external_input: true
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: §1 introduction footnote1 p.2; Theorem1.1 p.3; comparison map(1.2) p.4
        and Theorem1.3(1) p.5; §3.3 definition(3.5) and Theorem3.5(1) pp.14–15;
        paragraph after Remark8.8 p.56
      statement: For each prime field F and j≥0, the actual EM motivic complex has a
        canonical map to Z(j)_cdh, the cdh sheafification of the left Kan
        extension of classical motivic cohomology from smooth F-schemes. This
        map identifies the target with L_cdh Z(j)_mot. For a Noetherian F-scheme
        X of dimension d, Z(j)_cdh(X) is supported in degrees≤j+d, as explicitly
        recalled on p56 from Theorem3.5(1).
      hypotheses: Any prime field F=Q or F_p, qcqs F-schemes and weights j≥0 for the
        construction/comparison. The stated Krull-dimension bound is used only
        for Noetherian finite-dimensional F-schemes. Equal characteristic means
        globally factoring the structure map through SpecQ or SpecF_p (footnote1
        p2).
      reading_limits: Read pp.2–5,14–15 and the p56 paragraph in full. Theorem3.5(1)
        is stated in terms of bounded filtered KH stages for finite valuative
        dimension; p56 explicitly states its resulting cdh-motivic cohomology
        bound in the Noetherian dimension-d setting of §8.2. That cdh bound is
        imported directly, not deduced from bare vanishing of total KH. The
        deeper construction then attributed to joint work with Bachmann is not
        reconstructed.
dependency_level: 8
---

## Statement
Fix a prime field $F$ and $j\geq0$. The actual EM functor $M_{j,F}=\mathbb Z(j)_{\mathrm{mot}}$ on qcqs $F$-schemes has a natural comparison $\alpha_{j,F}:M_{j,F}\to C_{j,F}$, where
$$C_{j,F}=\mathbb Z(j)_{\mathrm{cdh}}=L_{\mathrm{cdh}}L_{\mathrm{Kan}}\mathbb Z(j)_{\mathrm{cla}}.$$
Here $L_{\mathrm{Kan}}$ extends the classical smooth-$F$ motivic complex to qcqs $F$-schemes and $L_{\mathrm{cdh}}$ is derived cdh sheafification. The comparison identifies $C_{j,F}$ with $L_{\mathrm{cdh}}M_{j,F}$. For every Noetherian $F$-scheme $X$ of finite dimension $d$, $H^i(C_{j,F}(X))=0$ for $i>j+d$.

## Source contract
**Given:** The prime-field motivic sheaf already supplied by [[lem-author-b747b28c359f-elmanto-morrow-complexes]], with cohomology in [[lem-author-b747b28c359f-derived-cohomology]].

**Goal:** Specify the actual comparison target and import its precise outer-term dimension bound.

[F1] EM comparison map(1.2), Theorem1.3(1), and definition(3.5) give the actual comparison and cdh target, on the same prime-field site as the supplied motivic complex.

[F2] The p.56 paragraph following Remark8.8 explicitly states $C_{j,F}(X)\in D(\mathbb Z)^{\leq j+d}$ in the Noetherian dimension-$d$ context, invoking Theorem3.5(1).

## External input
Import [F1]–[F2] with the full source records and reading limits. A complex belongs to $D(\mathbb Z)^{\leq N}$ when its cohomology vanishes in every degree $>N$. The source obtains the cdh-motivic bound from bounds on the individual filtered stages and shifted graded terms of KH, rather than from vanishing of the total KH-groups alone. The construction and comparison are imported established inputs, not local reconstructions of cdh motivic cohomology.
