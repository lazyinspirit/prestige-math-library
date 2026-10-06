---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading, followed by recorded Step 7 current repair argument acceptance. The repair receipt records local author review; no independent repair audit is claimed. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-21.md"
      - "research/frontier-38-owner-30-alpha-batch-21-5a.md"
      - "research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u21.json"
    content_sha256: "0d291d7a4e094d3f1ec79f44ad67b8ba6900a7c60082f1fdf3f44cb418dedb02"
id: lem-level-one-cusp-chart-and-compactness
kind: lemma
title: "The cusp chart and compactness of X(1)"
status: published
origin: pipeline
deps:
  - def-modular-group-action-on-the-upper-half-plane
  - thm-standard-fundamental-domain-for-the-modular-group
  - lem-modular-quotient-local-charts
  - def-quotient-topology
  - thm-quotient-universal-property
  - def-homeomorphism-and-open-maps
  - lem-homeomorphism-criteria
  - def-hausdorff-space
  - def-compact-space
  - def-subspace-topology-top
  - thm-compactness-agrees-with-metric-compactness
  - thm-compactness-under-continuous-maps
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - thm-continuous-image-of-a-connected-space
  - def-riemann-surface-and-holomorphic-atlas
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - thm-orbit-map-of-a-covering-space-action-is-a-covering
  - def-covering-space-action
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-complex-exponential-addition-and-real-extension
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-bezout-identity
  - thm-heine-borel-rn
  - lem-nonzero-derivative-gives-local-biholomorphism
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Section 5.3, printed pp. 97–98: properness at the cusp of J; the explicit compactification and q-chart are in Milne pp. 35–36."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Example 2.20 and Proposition 2.21 with their surrounding construction, printed pp. 35–36: the q-chart, cusp topology and compactness."
proof_strategy: direct
---

## Statement

Let $\mathfrak H^*=\mathfrak H\cup\mathbb Q\cup\{\infty\}$ be the space obtained by adding the cusps, topologised by the usual topology on $\mathfrak H$ together with, at $\gamma\cdot\infty$, the images under $\gamma\in PSL_2(\mathbb Z)$ of the basic neighbourhoods $\{\Im\tau>N\}\cup\{\infty\}$ of $\infty$. Then the $PSL_2(\mathbb Z)$-action extends continuously to $\mathfrak H^*$, the cusps form the single orbit $\mathbb Q\cup\{\infty\}=PSL_2(\mathbb Z)\cdot\infty$, and $X(1)=PSL_2(\mathbb Z)\backslash\mathfrak H^*$ is compact Hausdorff with $Y(1)=PSL_2(\mathbb Z)\backslash\mathfrak H$ as a dense open subset whose complement is the single cusp class. The function $q(\tau)=e^{2\pi i\tau}$ descends to a homeomorphism of a neighbourhood of the cusp class onto an open disc in $\mathbb C$ and provides the cusp chart, so that $X(1)$ is a compact Riemann surface.

## Facts & Assumptions

**Given:** The action of $G:=PSL_2(\mathbb Z)=\langle S,T\rangle$ on $\mathfrak H$ with $S\tau=-1/\tau$, $T\tau=\tau+1$, its fundamental domain $D$, and the identification of $G$ with its Möbius transformations on $\widehat{\mathbb C}$ ([[def-modular-group-action-on-the-upper-half-plane]], [[thm-standard-fundamental-domain-for-the-modular-group]]).

[F1] Every orbit meets $\overline D=\{\tau:|\Re\tau|\le1/2,|\tau|\ge1\}$, no two distinct points of $D$ are equivalent, and two distinct $z,z'\in\overline D$ are equivalent exactly when $z'=z\pm1$ with $\Re z=\mp1/2$ or $z'=-1/z$ with $|z|=1$ ([[thm-standard-fundamental-domain-for-the-modular-group]]).

[F2] For finite-index $\Gamma\le G$ the quotient $\Gamma\backslash\mathfrak H$ has the properties of [[lem-modular-quotient-local-charts]]; in particular its quotient map is open and the quotient is Hausdorff.

[F3] Quotient topologies, continuous maps, homeomorphisms, compactness and Hausdorffness are as in [[def-quotient-topology]], [[thm-quotient-universal-property]], [[def-homeomorphism-and-open-maps]], [[lem-homeomorphism-criteria]], [[def-hausdorff-space]], [[def-compact-space]], [[def-subspace-topology-top]], [[thm-compactness-agrees-with-metric-compactness]], [[thm-compactness-under-continuous-maps]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-continuous-image-of-a-connected-space]]; complex structures and holomorphic maps are as in [[def-riemann-surface-and-holomorphic-atlas]] and [[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]].

[F4] The $\mathbb Z$-action on $\mathfrak H$ by $T^n$ is a covering-space action, so its orbit map is a covering, and $e^{2\pi i\tau}=e^{2\pi i\tau'}$ exactly when $\tau-\tau'\in\mathbb Z$ ([[thm-orbit-map-of-a-covering-space-action-is-a-covering]], [[def-covering-space-action]], [[thm-kernel-and-fibres-of-complex-exponential]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-exponential-addition-and-real-extension]]).

## Proof

1.1 The action extends to $\mathfrak H^*$: for $\gamma\in G$ and a cusp $\gamma_0\cdot\infty=m/n$ with $m,n$ coprime, Bézout gives $b,d\in\mathbb Z$ with $md-nb=1$, so $\bigl(\begin{smallmatrix}m&b\\n&d\end{smallmatrix}\bigr)\in SL_2(\mathbb Z)$ and $\gamma\gamma_0\cdot\infty=\gamma\cdot(m/n)$; Möbius maps are homeomorphisms of $\widehat{\mathbb C}$ carrying $\mathbb Q\cup\{\infty\}$ to itself and the basic cusp neighbourhoods of $\gamma_0\cdot\infty$ to basic cusp neighbourhoods of $\gamma\gamma_0\cdot\infty$, so the extended action is continuous and well defined. Every rational $m/n$ in lowest terms equals $\gamma\cdot\infty$ for the matrix above with $\gamma=\bigl(\begin{smallmatrix}m&b\\n&d\end{smallmatrix}\bigr)$, and $\infty$ itself is in the orbit, so the cusps form the single orbit $\mathbb Q\cup\{\infty\}=G\cdot\infty$. [F2, F3, given, construct, algebra]

1.2 Fix $N>1$ and put $B_N:=\{\Im\tau>N\}\cup\{\infty\}$. If $\gamma\in SL_2(\mathbb Z)$ has $c\ne0$ and $z,\gamma z\in\mathfrak H$ with $\Im z,\Im\gamma z>N$, then $\Im(\gamma z)=\Im z/|cz+d|^2\le\Im z/(c\Im z)^2=1/(c^2\Im z)<1/N<N$, a contradiction; hence every $\gamma$ mapping a point of $B_N$ back into $B_N$ has $c=0$, i.e. lies in $\langle T\rangle$. Consequently the $G$-orbit of a point of $B_N$ meets $B_N$ exactly in its $\langle T\rangle$-orbit, and $B_N/\langle T\rangle$ is identified with its image $p(B_N)$. By [F4] the map $q(\tau)=e^{2\pi i\tau}$ realises $\mathfrak H/\langle T\rangle\cong\{0<|q|<1\}$, so it descends to a homeomorphism of $p(B_N)$ onto $\{|q|<e^{-2\pi N}\}$ sending the cusp class to $0$; the topology at the cusp was defined exactly so that $\{\Im\tau>N'\}$ corresponds to $\{|q|<e^{-2\pi N'}\}$, so this is a homeomorphism onto the open disc and provides the cusp chart. [F2, F3, F4, given, construct, algebra]

2.1 Put $K:=\overline D\cup\{\infty\}$ with its subspace topology in $\mathfrak H^*$. Given an intrinsic open cover $\mathcal U$ of $K$, take $U_\infty\in\mathcal U$ containing $\infty$; the subspace topology and the cusp neighbourhood basis give $N>1$ with $K\cap B_N\subseteq U_\infty$. The set $L:=\overline D\cap\{\Im\tau\le N\}$ is closed and bounded in $\mathbb C$, with imaginary part at least $\sqrt3/2$, hence compact by [[thm-heine-borel-rn]] and the metric/topological compactness agreement in [F3]. Since $\mathfrak H$ has its usual topology inside $\mathfrak H^*$, the topology induced on $L$ from $K$ is its usual subspace topology. Thus $\{U\cap L:U\in\mathcal U\}$ is an intrinsic open cover of $L$ and has a finite subcover. The corresponding finitely many members of $\mathcal U$, together with $U_\infty$, cover $K$, proving its compactness. The quotient map $p$ is continuous, so $p(\overline D\cup\{\infty\})$ is compact by [F3]; it equals $X(1)$ because every point of $\mathfrak H$ is $G$-equivalent to a point of $\overline D$ by [F1] and every cusp lies in the orbit of $\infty$ by 1.1. Hence $X(1)$ is compact. [F1, F3, step 1.1, given, algebra]

3.1 To separate the cusp from an interior point $p(\tau)$, choose a relatively compact open neighbourhood $U$ of $\tau$ with $0<y_0\le\Im z\le Y$ on $U$. For every $\gamma\in G$, its height on $U$ is at most $M=\max(Y,1/y_0)$: if $c=0$ height is unchanged, while if $c\ne0$, $\Im(\gamma z)\le1/(c^2\Im z)\le1/y_0$. For $N>\max(1,M)$ the open sets $p(U)$ and $p(B_N)$ are disjoint. The quotient map on $\mathfrak H^*$ is open, since the saturation of each open set is the union of its translates; hence these are open neighbourhoods in $X(1)$. Two interior points are separated by [F2], so $X(1)$ is Hausdorff. The interior quotient is open and dense, since every cusp neighbourhood meets $\mathfrak H$; its complement is the unique cusp class. Its atlas [F2] is compatible with the cusp coordinate: for $N>1$ stabilisers on $B_N\cap\mathfrak H$ are trivial and $q'=2\pi iq\ne0$, so the transition to any local lift chart and its inverse are holomorphic. The inherited countable interior basis plus $p(B_n)$, $n\ge2$, gives second countability; connectedness follows from the connected dense interior. Together with 2.1 this makes $X(1)$ a compact Riemann surface. [F1, F2, F3, F4, step 1.2, step 2.1, algebra] ∎
