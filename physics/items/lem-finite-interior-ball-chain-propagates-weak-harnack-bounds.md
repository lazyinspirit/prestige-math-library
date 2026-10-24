---
id: lem-finite-interior-ball-chain-propagates-weak-harnack-bounds
kind: lemma
title: "A finite interior ball chain propagates weak Harnack bounds"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 13
deps: [thm-harnack-inequality-for-nonnegative-weak-solutions, thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions, thm-heine-borel-rn, def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, def-uniformly-elliptic-divergence-form-operator, def-connected-space, def-ball-average-operator-on-r-n, def-lebesgue-point-and-lebesgue-set, thm-almost-every-point-is-a-lebesgue-point, def-l-p-space-as-a-quotient-by-null-functions, def-essential-supremum-with-respect-to-a-measure, def-countable-choice, def-axiom-of-choice]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Krummel, Consequences of De Giorgi-Nash-Moser (4 March 2016; complete 7-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/ConseqDNM.pdf"
      locator: "Corollary 1 and the ball-chain argument (3)-(4), printed pp. 1-2 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 18, Theorem 1 and its proof, printed p. 211: the local Harnack inequality used in the finite overlap-chain argument proved here"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the Axiom of Choice. Let $n\ge3$, let $\Omega\subseteq\mathbb R^n$ be open and connected, let $A,L_0$ be as in [[thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions]], let $F\in L^q_{\mathrm{loc}}(\Omega)$ with $q>n/2$, and let $u\in H^1(\Omega;\mathbb R)$ with $u\ge0$ a.e. be a weak solution of $L_0u=-F$ ([[thm-harnack-inequality-for-nonnegative-weak-solutions]]). Let $K\Subset\Omega$ be compact and connected with positive Lebesgue measure.
Then there are a number $N=N(K,\Omega)$ and balls $B_{R_1}(x_1),\dots,B_{R_N}(x_N)\Subset\Omega$ with $\bigcup_{j=1}^N B_{R_j/2}(x_j)\supseteq K$ together with a constant $C=C(n,q,\theta,M_a,K,\Omega)$ such that
$$\operatorname{ess\,sup}_{K}u\le C\Bigl(\operatorname{ess\,inf}_{K}u+\sum_{j=1}^N R_j^{\,2-n/q}\|F\|_{L^q(B_{2R_j}(x_j))}\Bigr).$$
The connectedness of $K$ makes the finite cover's overlap graph connected, and the constant grows with $N$; the forcing sum is finite because the cover is finite.

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; a connected open set $\Omega\subseteq\mathbb R^n$; uniformly elliptic measurable symmetric coefficients $A$ with constants $\theta,M_a$; a source $F\in L^q_{\mathrm{loc}}(\Omega)$, $q>n/2$; a nonnegative weak solution $u\in H^1(\Omega;\mathbb R)$ of $L_0u=-F$; a compact connected set $K\Subset\Omega$ with positive Lebesgue measure.

[F1] Assume the Axiom of Choice. Harnack inequality on doubled balls: for every ball $B_R(x)$ with $B_{2R}(x)\Subset\Omega$, $\operatorname{ess\,sup}_{B_{R/2}(x)}u\le C_1(\operatorname{ess\,inf}_{B_{R/2}(x)}u+R^{2-n/q}\|F\|_{L^q(B_{2R}(x))})$ with $C_1=C_1(n,q,\theta,M_a)$ ([[thm-harnack-inequality-for-nonnegative-weak-solutions]], [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]]).

[F2] Assume the Axiom of Choice. Compactness and containment: since $K$ is compact and $\Omega$ is open, $\operatorname{dist}(K,\mathbb R^n\setminus\Omega)>0$, so a finite family of balls $B_{2R_i}(x_i)\Subset\Omega$, $x_i\in K$, can be chosen with the half-balls $B_{R_i/2}(x_i)$ covering $K$ ([[thm-heine-borel-rn]]).

[F3] Since $K$ is connected, the finite cover by the relative open sets $K\cap B_{R_i/2}(x_i)$ has a connected intersection graph: otherwise the unions corresponding to two components of the graph would separate $K$. If two such relative open sets intersect, the corresponding open balls intersect in a nonempty open set and hence in a set of positive Lebesgue measure ([[def-connected-space]]).

[F4] Assume Countable Choice. The zero extension of $u\in L^2(\Omega)$ lies in $L^2(\mathbb R^n)\subset L^1_{\mathrm{loc}}(\mathbb R^n)$; applying the cited Lebesgue-point theorem and restricting to $\Omega$ gives a full-measure Lebesgue set ([[def-lebesgue-point-and-lebesgue-set]], [[thm-almost-every-point-is-a-lebesgue-point]]). At a Lebesgue point $x$ in a ball $B$, $\operatorname{ess\,inf}_{B}u\le u(x)\le\operatorname{ess\,sup}_{B}u$: if either inequality failed, the averages of $|u(y)-u(x)|$ over sufficiently small balls centered at $x$ would stay bounded below by a positive constant.

[F5] For two measurable balls $B_i,B_j$ with $|B_i\cap B_j|>0$, $\operatorname{ess\,inf}_{B_i}u\le\operatorname{ess\,sup}_{B_j}u$; otherwise a real number strictly between them would be both an almost-everywhere lower bound on $B_i$ and an almost-everywhere upper bound on $B_j$, impossible on their positive-measure intersection ([[def-essential-supremum-with-respect-to-a-measure]]).

[F6] If $M_j\le C_1(M_{j+1}+g_j)$ for $j=1,\dots,N-1$ and $C_1\ge1$, then $M_1\le C_1^N(M_N+\sum_{j=1}^{N-1}g_j)$ by expanding the finite recurrence. [algebra]

## Proof

**Proof technique:** direct; cover $K$ by finitely many doubled balls whose half-balls have a connected overlap graph, propagate Harnack along a graph path, and use Lebesgue-point values at the endpoints to compare the essential extrema on $K$.

1.1 The finite cover and connected overlap graph. By [F2] choose finitely many balls $B_{R_i}(x_i)$, $x_i\in K$, with $B_{2R_i}(x_i)\Subset\Omega$ whose half-balls cover $K$. By [F3] their intersection graph is connected. Let $G:=\sum_{i=1}^N g_i$, where $g_i:=R_i^{2-n/q}\|F\|_{L^q(B_{2R_i}(x_i))}$; this sum is finite because the cover is finite and $F\in L^q_{\rm loc}(\Omega)$. [given, F2, F3]

2.1 Endpoint estimate along a graph path. Put $C_0:=\max\{1,C_1\}$, where $C_1$ is the local Harnack constant in [F1]. Let $x,y\in K$ be Lebesgue points of $u$, and choose cover half-balls $B_{R_i/2}(x_i)$ and $B_{R_j/2}(x_j)$ containing them. By [F3] there is a path $i=i_0,i_1,\dots,i_\ell=j$ in the finite intersection graph, with $\ell\le N-1$. Write $M_s:=\operatorname{ess\,sup}_{B_{R_{i_s}/2}(x_{i_s})}u$ and $m_s:=\operatorname{ess\,inf}_{B_{R_{i_s}/2}(x_{i_s})}u$. For $s<\ell$, the Harnack bound [F1] and the correctly oriented overlap comparison [F5] give $M_s\le C_0(m_s+g_{i_s})\le C_0(M_{s+1}+g_{i_s})$. Iterating by [F6] and applying [F1] on the last ball gives $u(x)\le M_0\le C_0^{\ell+1}(u(y)+\sum_{s=0}^{\ell}g_{i_s})\le C_0^N(u(y)+G)$, because [F4] gives $u(x)\le M_0$ and $m_\ell\le u(y)$ at Lebesgue points. [step 1.1, F1, F3, F4, F5, F6]

3.1 Conclusion for essential extrema on $K$. The set of Lebesgue points in $K$ has full measure in $K$ by [F4]. For any $\varepsilon>0$, the positive-measure hypothesis on $K$ and the definition of essential infimum give a Lebesgue point $y\in K$ with $u(y)<\operatorname{ess\,inf}_Ku+\varepsilon$. Applying step 2.1 with this fixed $y$ gives $u(x)\le C_0^N(\operatorname{ess\,inf}_Ku+\varepsilon+G)$ for almost every Lebesgue point $x\in K$. Taking the essential supremum over $K$ and then letting $\varepsilon\downarrow0$ proves the stated inequality with $C:=C_0^N$. [step 2.1, F4, algebra] ∎
