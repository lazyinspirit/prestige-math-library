---
id: def-universal-principal-bundle-and-classifying-space
kind: definition
title: Universal principal bundles and classifying spaces
status: draft
origin: pipeline
deps: ["def-principal-g-bundle-and-associated-fiber-bundle", "def-compactly-generated-conventions-for-based-homotopy"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Dale Husemoller, Fibre Bundles, Third Edition
      url: https://link.springer.com/book/10.1007/978-1-4757-2261-1
      locator: Chapter 4, Sections 10--12, Definitions 10.5 and 11.1 and Summary 12.5, printed pages 53--58
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Lecture 19, Theorem 19.1 and the paragraph after Proposition 19.2, printed pages 62--63
---

## Definition

Let $G$ be a well-pointed topological group of CW type. All $G$-actions on principal bundles on this page are right actions. A **classifying principal $G$-bundle** is a numerable principal bundle

$$ p:EG\longrightarrow BG $$

such that pullback induces a bijection

$$ [X,BG]\xrightarrow{\ \cong\ }\{\text{isomorphism classes of numerable principal }G\text{-bundles over }X\} $$

for every CGWH space $X$. The space $BG$ is then a **classifying space** of $G$. A classifying bundle whose total space $EG$ is contractible is called a **contractible universal model**.

Contractibility of the total space is part of the model constructed below, but it is not by itself the definition of the displayed classification property for arbitrary bases. We will first construct Milnor's numerable principal bundle with contractible total space and then prove directly that it has the pullback property. The paracompact version requires a separate theorem saying that the locally trivial bundle under consideration is numerable; no such implication is built into this definition.

Choose $e_0\in EG$ over $b_0\in BG$. These points base the fiber sequence $G\to EG\to BG$, using $g\mapsto e_0g$ to identify its fiber with $G$.
