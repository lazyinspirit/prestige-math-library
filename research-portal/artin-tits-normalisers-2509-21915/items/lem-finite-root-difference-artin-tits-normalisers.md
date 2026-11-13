---
id: lem-finite-root-difference-artin-tits-normalisers
kind: lemma
title: Finite root difference forces finite connected parabolic
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-connected-support-artin-tits-normalisers
  - def-parabolic-subgroups-artin-tits-normalisers
  - lem-author-73bcf419a602-finite-difference-parabolic-action
  - lem-author-73bcf419a602-finite-root-finiteness
  - lem-author-73bcf419a602-component-root-intersection
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-connected-support-artin-tits-normalisers: mathematical-premise
  def-parabolic-subgroups-artin-tits-normalisers: mathematical-premise
  lem-author-73bcf419a602-finite-difference-parabolic-action: mathematical-premise
  lem-author-73bcf419a602-finite-root-finiteness: mathematical-premise
  lem-author-73bcf419a602-component-root-intersection: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 11; Lemma 3.20(1)
      statement: For $I\subseteq\Gamma_0$ and $a\in I^c$, if
        $|\Phi_{I+a}\setminus\Phi_I|<\infty$, then $W_{[I,a]}$ is finite.
      hypotheses: The hypotheses in the extracted statement; standing Coxeter-system
        notation of §§2–3. Spherical type is imposed only where explicitly
        stated.
      reading_limits: Frozen original PDF p. 11, Lemma 3.20(1), its proof citation,
        and Notation 3.13 were inspected in extracted text and the Lemma page
        image. This is attribution only, not a proof premise. The independently
        accessible June-2020 Iyama–Wemyss author manuscript was inspected at
        §§1.1–1.3 and searched for Lemma 1.40; that locator is absent in this
        version. No verification of the cited version or its Lemma 1.40 is
        claimed. The proof below is an independent local argument.
proof_strategy: direct
dependency_level: 11
formulation_deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-connected-support-artin-tits-normalisers
  - def-parabolic-subgroups-artin-tits-normalisers
argument_deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-connected-support-artin-tits-normalisers
  - def-parabolic-subgroups-artin-tits-normalisers
  - lem-author-73bcf419a602-finite-difference-parabolic-action
  - lem-author-73bcf419a602-finite-root-finiteness
  - lem-author-73bcf419a602-component-root-intersection
---

## Statement

For $I\subseteq\Gamma_0$ and $a\in I^c$, if $|\Phi_{I+a}\setminus\Phi_I|<\infty$, then $W_{[I,a]}$ is finite.

## Statement references

[[def-coxeter-data-artin-tits-normalisers]]

[[def-connected-support-artin-tits-normalisers]]

[[def-parabolic-subgroups-artin-tits-normalisers]]

## Facts & Assumptions

[F1] Finite $D$ implies that $K$ and $W_J$ are finite by [[lem-author-73bcf419a602-finite-difference-parabolic-action]].

[F2] For finite $L$, $W_L$ is finite if and only if $\Phi_L$ is finite by [[lem-author-73bcf419a602-finite-root-finiteness]].

[F3] One has $\Phi_K\cap\Phi_I=\Phi_J$ and $\Phi_K\setminus\Phi_J\subseteq D$ by [[lem-author-73bcf419a602-component-root-intersection]].

## Proof
**Given:** fix the possibly infinite-rank Coxeter system $(W,S)$, its associated diagram $\Gamma$ on $\Gamma_0$, and its standard geometric root representation as in [[def-coxeter-data-artin-tits-normalisers]]. Take the parabolic root sets of [[def-parabolic-subgroups-artin-tits-normalisers]] for this same system and $K=[I,a]$ as in [[def-connected-support-artin-tits-normalisers]] for this diagram. Put $J=K\setminus\{a\}$ and $D=\Phi_{I+a}\setminus\Phi_I$, and assume $D$ is finite. **Goal:** prove $W_K$ finite, without a finite ambient-rank assumption.


**Proof technique:** direct.

1.1 By [F1], $K$ is finite and $W_J$ is finite. Since $J\subseteq K$ is finite, [F2] gives that $\Phi_J$ is finite. [F1, F2, given]

2.1 By [F3], every element of $\Phi_K$ lies either in $\Phi_J$ or in the finite set $D$. Thus $\Phi_K\subseteq\Phi_J\cup D$ is finite. Since $K$ is finite, [F2] now gives $W_K=W_{[I,a]}$ finite, as required. [F2, F3, step 1.1, given] ∎

## Source notes

The frozen article attributes this claim to [24, Lemma 1.40]. The accessible independent Iyama–Wemyss author manuscript (PDF metadata dated 23 June 2020; https://www.maths.gla.ac.uk/~mwemyss/MainFile_for_web.pdf) has different numbering and does not contain that locator. Its §§1.1–1.3 (printed pp. 3–4; PDF pp. 27–28) were inspected for presentation, parabolic and reflection conventions only; no matching theorem or proof was verified there. The proof above instead uses finite invariant root sets and propagation along connected diagram paths. It is an independent local derivation, not a reconstruction of the unread cited Lemma 1.40.
