---
id: lem-author-9b7c42e8f103-interior-complement
kind: lemma
title: Deleting relative root hyperplanes removes all cone-boundary points
status: published
domain: mathematics
origin: pipeline
deps:
  - lem-author-9b7c42e8f103-restricted-root-traces
  - lem-author-9b7c42e8f103-open-j-chambers
  - math:def-connected-component-and-quasicomponent
  - math:def-interior-closure-boundary-top
dependency_roles:
  lem-author-9b7c42e8f103-restricted-root-traces: mathematical-premise
  lem-author-9b7c42e8f103-open-j-chambers: mathematical-premise
  math:def-connected-component-and-quasicomponent: mathematical-premise
  math:def-interior-closure-boundary-top: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Osamu Iyama and Michael Wemyss, Tits Cone Intersections and Applications,
        author-hosted draft
      url: https://www.maths.gla.ac.uk/~mwemyss/MainFile_for_web.pdf
      hypotheses: Finite Coxeter graph, canonical real reflection representation and
        dual action; arbitrary vertex subset J, not required spherical. Our I is
        the source secondary subset, and our J is the source fixed subset.
      reading_limits: Read the extracted source text of §1.1 and §§1.3–1.4 (printed
        pp. 3–6), including Definitions 1.3–1.6 and the following component
        assertion. Checked the finite-rank setup and notation correspondence. No
        source proof review or local reconstruction; no infinite-rank topology
        or local-finiteness result imported.
      locator: Sentence following Definition 1.6, printed p. 6 (PDF p. 30)
      statement: Iyama–Wemyss, the sentence immediately after Definition 1.6, states
        that the $J$-chambers $xC_I\subseteq E_J$ with $|I|=|J|$ are the
        connected components of $(U\cap
        E_J)\setminus\bigcup_{\alpha\in\Phi^J}H_\alpha$.
dependency_level: 3
formulation_deps:
  - lem-author-9b7c42e8f103-restricted-root-traces
  - lem-author-9b7c42e8f103-open-j-chambers
  - math:def-interior-closure-boundary-top
argument_deps:
  - lem-author-9b7c42e8f103-restricted-root-traces
  - lem-author-9b7c42e8f103-open-j-chambers
  - math:def-connected-component-and-quasicomponent
  - math:def-interior-closure-boundary-top
---

## Statement

Let $(W,S)$ be a finite-rank Coxeter system in its canonical real representation $V=\mathbb R^S$, with basis $(\alpha_s)$, dual $\Theta$, root system $\Phi$, contragredient action, and Tits cone $U$. For $I\subseteq S$ put $E_I=\{f:f(\alpha_i)=0\ (i\in I)\}$ and $C_I=\{f\in E_I:f(\alpha_s)>0\ (s\notin I)\}$. Fix $J\subseteq S$ and put $E=E_J$, $T=U\cap E$, and $T^\circ=\operatorname{int}_E T$. With $\Phi^J$ and $\mathcal A$ as in the restricted-root-trace lemma, put $D=\bigcup_{K\in\mathcal A}K$. Then $T\setminus D=T^\circ\setminus D$.

## Statement references

[[lem-author-9b7c42e8f103-restricted-root-traces]]

[[lem-author-9b7c42e8f103-open-j-chambers]]

[[math:def-interior-closure-boundary-top]]

## External input

Iyama–Wemyss, the sentence immediately after Definition 1.6, states that the $J$-chambers $xC_I\subseteq E_J$ with $|I|=|J|$ are the connected components of $(U\cap E_J)\setminus\bigcup_{\alpha\in\Phi^J}H_\alpha$.

## Facts & Assumptions

[F1] The restricted deletion set agrees with the root deletion set by [[lem-author-9b7c42e8f103-restricted-root-traces]].

[F2] Every source $J$-chamber is contained in $T^\circ$ by [[lem-author-9b7c42e8f103-open-j-chambers]].

[F3] Every point of a topological space belongs to its connected component, including when that space is a subspace, as defined and justified in [[math:def-connected-component-and-quasicomponent]].

[F4] In the topological space $E$, the interior of $T$ is the union of open subsets of $E$ contained in $T$; in particular $T^\circ\subseteq T$, by [[math:def-interior-closure-boundary-top]].

## Proof
**Given:** The objects and hypotheses of the statement. **Goal:** Establish its conclusion.


Iyama–Wemyss, the sentence immediately after Definition 1.6, states that the $J$-chambers $xC_I\subseteq E_J$ with $|I|=|J|$ are the connected components of $(U\cap E_J)\setminus\bigcup_{\alpha\in\Phi^J}H_\alpha$.


1.1 By [F3], every point $p\in T\setminus D$ belongs to a connected component of that space. By [F1] and the external input, that component is a source $J$-chamber. By [F2] it is contained in $T^\circ$, so $p\in T^\circ\setminus D$. [F1, F2, F3, given]

2.1 Conversely $T^\circ\subseteq T$ by the definition of interior in [F4], so $T^\circ\setminus D\subseteq T\setminus D$. Together with the first inclusion this proves equality, also for the zero-dimensional case. [F4, step 1.1, given] ∎

## Source notes

The external statement is used only as explicitly recorded above. It is an independent prerequisite source, not the article under study. The local topology and linear-algebra argument is authored here; the source proof has not been reviewed.
