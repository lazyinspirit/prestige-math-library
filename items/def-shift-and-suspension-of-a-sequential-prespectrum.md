---
id: def-shift-and-suspension-of-a-sequential-prespectrum
kind: definition
title: Shift and suspension of sequential prespectra
status: draft
origin: pipeline
deps: ["def-sequential-prespectrum-spectrum-and-adjoint-structure-maps", "lem-the-stable-homotopy-colimit-is-independent-of-the-chosen-cofinal-tail"]
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
    - title: Allen Hatcher, Spectral Sequences in Algebraic Topology, Chapter 2
      url: https://web.archive.org/web/20100414235039if_/http://www.math.cornell.edu:80/~hatcher/SSAT/SSch2.pdf
      locator: Section 2.1, PDF pages 9--10
---

## Definition

For a sequential prespectrum $E$, its **shift** is

$$ (\operatorname{sh}E)_n=E_{n+1}, $$

with structure map $\sigma_{n+1}:S^1\wedge E_{n+1}\to E_{n+2}$.
Its **sequential suspension** (the right-shifted object) is

$$ (sE)_0=*,\qquad (sE)_{n+1}=E_n, $$

with the unique structure map out of $S^1\wedge *$ at level zero and
$\sigma_{n-1}:S^1\wedge E_{n-1}\to E_n$ at level $n\geq1$.

With the grading convention
$\pi_k(E)=\operatorname*{colim}_n\pi_{n+k}(E_n)$, there are canonical
isomorphisms

$$ \boxed{\ \pi_k(\operatorname{sh}E)\cong\pi_{k-1}(E),\qquad \pi_k(sE)\cong\pi_{k+1}(E).\ } $$

## Reindexing check

For the shift, put $m=n+1$ and delete the missing finite initial term:

$$ \operatorname*{colim}_n\pi_{n+k}(E_{n+1}) =\operatorname*{colim}_m\pi_{m+(k-1)}(E_m)=\pi_{k-1}(E). $$

For $sE$, discard its zero level and put $m=n-1$:

$$ \operatorname*{colim}_{n\geq1}\pi_{n+k}(E_{n-1}) =\operatorname*{colim}_{m\geq0}\pi_{m+(k+1)}(E_m)=\pi_{k+1}(E). $$

The cofinal-tail lemma makes both reindexings canonical. These signs correct
the reversed formulas in the Step-1 scaffold.

