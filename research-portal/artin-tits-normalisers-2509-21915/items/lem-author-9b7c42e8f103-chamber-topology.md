---
id: lem-author-9b7c42e8f103-chamber-topology
kind: lemma
title: The full-cone and interior arrangements have identical chambers
status: draft
domain: mathematics
origin: pipeline
deps:
  - lem-author-9b7c42e8f103-interior-complement
  - def-arrangement-topology-interface-artin-tits-prerequisites
  - lem-author-9b7c42e8f103-restricted-root-traces
  - prop-tits-domain-interface-artin-tits-prerequisites
dependency_roles:
  lem-author-9b7c42e8f103-interior-complement: mathematical-premise
  def-arrangement-topology-interface-artin-tits-prerequisites: mathematical-premise
  lem-author-9b7c42e8f103-restricted-root-traces: mathematical-premise
  prop-tits-domain-interface-artin-tits-prerequisites: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 4
sources:
  references:
    - title: Osamu Iyama and Michael Wemyss, Tits Cone Intersections and Applications
        (author-hosted draft)
      url: https://www.maths.gla.ac.uk/~mwemyss/MainFile_for_web.pdf
      locator: §§1.1, 1.3–1.4; Definitions 1.4–1.6 and the sentence immediately after
        Definition 1.6; printed pp. 3–6, especially p. 6 (PDF pp. 27–30,
        especially p. 30).
      statement: Under the statement's hypotheses, the sets $xC_I\subseteq E_J$ with
        $|I|=|J|$ are precisely the connected components of $(U\cap
        E_J)\setminus\bigcup_{\alpha\in\Phi^J}H_\alpha$.
      hypotheses: Finite Coxeter matrix; canonical real reflection representation with
        B(alpha_i,alpha_j)=-cos(pi/m_ij), its contragredient dual action and
        Tits cone; arbitrary fixed vertex subset J. Our I renames the secondary
        subset in Definition 1.6; our E_J is its Theta_J. No sphericity
        assumption.
      reading_limits: Read the web-extracted text of §§1.1, 1.3–1.4, including
        Definitions 1.3–1.6 and the following component assertion. PDF
        screenshots were unavailable. Imported only the stated identification;
        did not review its proof or infer local finiteness.
formulation_deps:
  - lem-author-9b7c42e8f103-interior-complement
  - def-arrangement-topology-interface-artin-tits-prerequisites
  - lem-author-9b7c42e8f103-restricted-root-traces
  - prop-tits-domain-interface-artin-tits-prerequisites
argument_deps:
  - lem-author-9b7c42e8f103-interior-complement
  - def-arrangement-topology-interface-artin-tits-prerequisites
  - lem-author-9b7c42e8f103-restricted-root-traces
  - prop-tits-domain-interface-artin-tits-prerequisites
---

## Statement

Let $(W,S)$ be a finite-rank Coxeter system in its canonical real representation $V=\mathbb R^S$, with basis $(\alpha_s)$, dual $\Theta$, root system $\Phi$, contragredient action, and Tits cone $U$. For $I\subseteq S$ put $E_I=\{f:f(\alpha_i)=0\ (i\in I)\}$ and $C_I=\{f\in E_I:f(\alpha_s)>0\ (s\notin I)\}$. Fix $J\subseteq S$ and put $E=E_J$, $T=U\cap E$, and $T^\circ=\operatorname{int}_E T$, the set of points admitting an open ball in $E$ contained in $T$. Write $H_\alpha=\{f\in\Theta:f(\alpha)=0\}$ and $\Phi^J=\{\alpha\in\Phi:E\not\subseteq H_\alpha\}$. Let $\mathcal A=\{E\cap H_\alpha:\alpha\in\Phi^J\}$, $D=\bigcup_{K\in\mathcal A}K$, and $\mathcal A^\circ=\{K\in\mathcal A:K\cap T^\circ\ne\varnothing\}$. Give $E$ its Euclidean topology and all its subsets their induced subspace topologies.

The identity identifies $T\setminus D$ and $T^\circ\setminus D$ as topological spaces, and hence identifies their connected components. Thus Iyama–Wemyss $J$-chambers, the sets $xC_I\subseteq E_J$ with $|I|=|J|$, are exactly the chambers of the restricted arrangement $(T^\circ,\mathcal A^\circ)$. Traces missing $T^\circ$ may be discarded without changing this conclusion.

## Statement references

[[lem-author-9b7c42e8f103-interior-complement]]

[[def-arrangement-topology-interface-artin-tits-prerequisites]]

[[lem-author-9b7c42e8f103-restricted-root-traces]]

[[prop-tits-domain-interface-artin-tits-prerequisites]]

## External input

Iyama–Wemyss, [Definition 1.6 and its following sentence](https://www.maths.gla.ac.uk/~mwemyss/MainFile_for_web.pdf#page=30), supplies this premise: Under the statement's hypotheses, the sets $xC_I\subseteq E_J$ with $|I|=|J|$ are precisely the connected components of $(U\cap E_J)\setminus\bigcup_{\alpha\in\Phi^J}H_\alpha$.

## Facts & Assumptions

[F1] The two complements are equal by [[lem-author-9b7c42e8f103-interior-complement]].

[F2] Chambers are connected components with the subspace topology, as defined in [[def-arrangement-topology-interface-artin-tits-prerequisites]]. An arrangement has a convex domain and linear hyperplanes meeting it; restriction keeps precisely those meeting the smaller convex domain.

[F3] Each member of $\mathcal A$ is a hyperplane in $E$, and $T\setminus D=T\setminus\bigcup_{\alpha\in\Phi^J}H_\alpha$, by [[lem-author-9b7c42e8f103-restricted-root-traces]].

[F4] The cone $U$ is convex and contains $0$, with the representation and root-hyperplane conventions of [[prop-tits-domain-interface-artin-tits-prerequisites]].

[F5] The chamber-component identification recorded in External input is imported directly from Iyama–Wemyss, Definition 1.6 and its following sentence.

## Proof

**Given:** The objects and hypotheses of the statement. **Goal:** Establish its conclusion.

1.1 By [F4], $T=U\cap E$ is convex: a convex combination of two points lies in both $U$ and the linear subspace $E$. Also $0\in T$. By [F3], the members of $\mathcal A$ are linear hyperplanes in $E$; each meets $T$ at $0$. Thus $(T,\mathcal A)$ is an arrangement in the sense of [F2]. [F2, F3, F4, given]

1.2 Both complements inherit their topology from $E$. Successive subspace topologies agree with the direct subspace topology: if $B\subseteq A\subseteq E$, an open set of $B$ induced through $A$ has the form $B\cap(A\cap O)=B\cap O$ for an open $O\subseteq E$, and conversely. By [F1], the two complements are the same subset of $E$, hence the same topological space. [F1, F2, algebra]

2.1 Use a coordinate Euclidean norm $\|\cdot\|$ on $E$ and write $B_E(x,r)=\{u\in E:\|u-x\|<r\}$. The interior $T^\circ$ is convex. Indeed, for $x,y\in T^\circ$, choose $r>0$ such that both $E$-balls $B_E(x,r)$ and $B_E(y,r)$ lie in $T$. For $0\leq t\leq1$ and $z\in E$ with $\|z\|<r$, convexity of $T$ gives $(1-t)(x+z)+t(y+z)=(1-t)x+ty+z\in T$. Hence $B_E((1-t)x+ty,r)\subseteq T$ and $(1-t)x+ty\in T^\circ$. The assertion is vacuous if the interior is empty. Every member of $\mathcal A^\circ$ meets $T^\circ$ by its definition, so $(T^\circ,\mathcal A^\circ)$ is precisely the restriction defined in [F2]. [F2, step 1.1, given, algebra]

3.1 By [F3], the full-cone complement is exactly the complement in [F5], so its connected components are the source $J$-chambers. Connectedness and maximal connected subsets are preserved by the identity in step 1.2, so the components of $T^\circ\setminus D$ are the same subsets. A trace missing $T^\circ$ deletes no point there, and consequently $T^\circ\setminus D=T^\circ\setminus\bigcup_{K\in\mathcal A^\circ}K$. By [F2] and step 2.1, the components of this last space are the chambers of the restricted arrangement. This proves both assertions. [F2, F3, F5, step 2.1, step 1.2] ∎
