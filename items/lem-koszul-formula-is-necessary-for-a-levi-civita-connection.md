---
id: lem-koszul-formula-is-necessary-for-a-levi-civita-connection
kind: lemma
title: "Koszul formula is necessary for a levi civita connection"
status: draft
origin: pipeline
deps: ["def-levi-civita-connection"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

Every Levi–Civita connection obeys the Koszul formula
$$2g(\nabla_XY,Z)=K(X,Y,Z),$$
where
$$K(X,Y,Z)=Xg(Y,Z)+Yg(Z,X)-Zg(X,Y)-g(X,[Y,Z])+g(Y,[Z,X])+g(Z,[X,Y]).$$
The right side uses only the supplied metric and vector fields.

## Facts & Assumptions

**Given:** A Levi–Civita connection for $g$ and local fields $X,Y,Z$.

[F1] Levi–Civita means metric compatibility and $\nabla_XY-\nabla_YX=[X,Y]$ ([[def-levi-civita-connection]]).

## Proof

1.1 Expand $S=Xg(Y,Z)+Yg(Z,X)-Zg(X,Y)$ by compatibility. Its six terms are $g(\nabla_XY,Z)+g(Y,\nabla_XZ)+g(\nabla_YZ,X)+g(Z,\nabla_YX)-g(\nabla_ZX,Y)-g(X,\nabla_ZY)$. [F1]

2.1 Substitute $\nabla_YX=\nabla_XY-[X,Y]$, $\nabla_ZX=\nabla_XZ+[Z,X]$ and $\nabla_ZY=\nabla_YZ+[Z,Y]$. Symmetry of $g$ cancels the $\nabla_XZ$ and $\nabla_YZ$ pairs, giving $S=2g(\nabla_XY,Z)-g(Z,[X,Y])-g(Y,[Z,X])+g(X,[Y,Z])$. Rearrangement yields the formula. Zero fields cause no exception and in dimension zero all terms vanish. The identity is local, including boundary-chart derivatives, and no choice axiom occurs. [F1, step 1.1] ∎
