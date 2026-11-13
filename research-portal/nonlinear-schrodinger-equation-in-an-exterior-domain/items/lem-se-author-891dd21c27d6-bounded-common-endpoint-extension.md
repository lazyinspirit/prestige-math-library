---
id: lem-se-author-891dd21c27d6-bounded-common-endpoint-extension
kind: lemma
domain: mathematics
title: A compactly supported common L²/H² extension from a bounded smooth domain
status: draft
deps:
  - math:def-axiom-of-choice
  - lem-se-author-891dd21c27d6-flat-second-order-reflection
  - math:thm-extension-theorem-for-bounded-smooth-domains
  - math:lem-test-function-cutoffs-and-euclidean-localization
  - math:lem-c-k-boundary-flattening-preserves-wkp-locally
  - math:lem-weak-leibniz-rule-with-a-smooth-factor
  - math:lem-compact-support-zero-extension-in-wkp
  - math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces
  - math:def-bounded-c-k-domain-and-boundary-charts
  - math:def-sobolev-space-wkp-and-its-norm
  - math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces
  - math:def-real-order-bessel-potential-sobolev-space
  - math:thm-heine-borel-rn
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-se-author-891dd21c27d6-flat-second-order-reflection: mathematical-premise
  math:thm-extension-theorem-for-bounded-smooth-domains: mathematical-premise
  math:lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  math:lem-c-k-boundary-flattening-preserves-wkp-locally: mathematical-premise
  math:lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  math:lem-compact-support-zero-extension-in-wkp: mathematical-premise
  math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  math:def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  math:def-sobolev-space-wkp-and-its-norm: mathematical-premise
  math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces: mathematical-premise
  math:def-real-order-bessel-potential-sobolev-space: mathematical-premise
  math:thm-heine-borel-rn: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Assume AC. Let $G\subset\mathbb R^n$ be bounded with smooth boundary, and let $V$ be a fixed open neighborhood of $\overline G$. There is one linear map $E_G:L^2(G)\to L^2(\mathbb R^n)$, independent of an endpoint choice, with $r_G E_G=I$, bounded also $W^{2,2}(G)\to W^{2,2}(\mathbb R^n)$, such that $\operatorname{supp}E_Gu\subset K\Subset V$ for one fixed compact set $K$. Moreover the weak space $W^{2,2}(G)$ equals the restriction quotient of whole-space $H^2(\mathbb R^n)$ with equivalent norms; at order zero the restriction quotient is isometrically $L^2(G)$.

Here $n\ge1$, $G$ is nonempty and open, and smooth boundary means the one-sided graph convention at every finite order, including the finite-union-of-intervals convention when $n=1$. Fix $\mathbb K\in\{\mathbb R,\mathbb C\}$; all maps and weak spaces are over $\mathbb K$. The weak spaces and their derivative-sum norms are those of the integer Sobolev definition. Whole-space $H^j(\mathbb R^n;\mathbb C)$, $j\in\{0,2\}$, is the Bessel-potential completion, identified by the integer Fourier theorem with its unique $L^2$ class; its norm is $\|\langle\xi\rangle^j\mathcal F_2F\|_2$ with $\langle\xi\rangle=(1+|\xi|^2)^{1/2}$. For real scalars, take its real-valued $L^2$ subspace with this inherited norm. Thus $H^0(\mathbb R^n;\mathbb K)=L^2(\mathbb R^n;\mathbb K)$ isometrically.

Precisely, $r_GF=F|_G$ is restriction of the $L^2$ class, and the endpoint restriction space and its infimum norm mean
$$\mathcal R_j(G;\mathbb K)=\{r_GF:F\in H^j(\mathbb R^n;\mathbb K)\}\subseteq L^2(G;\mathbb K),\qquad \|u\|_{\mathcal R_j}=\inf_{\substack{F\in H^j(\mathbb R^n;\mathbb K)\\r_GF=u\ {\rm a.e.}}}\|F\|_{H^j},\quad j\in\{0,2\}.$$
Equality of restrictions is always equality almost everywhere on $G$. Equivalently, this is the quotient by the kernel of $r_G$. The assertions above are $\mathcal R_2(G;\mathbb K)=W^{2,2}(G;\mathbb K)$ with equivalent norms and $\mathcal R_0(G;\mathbb K)=L^2(G;\mathbb K)$ isometrically.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [[math:def-axiom-of-choice]]; in particular its countable and dependent instances are available. AC selects a graph chart at each boundary point before the finite subcover is taken; its countable instance is inherited through the Sobolev, weak-chain and Fourier interfaces. The subsequent finite cutoffs and the explicit reflection require no further choice principle.

[F2] [[lem-se-author-891dd21c27d6-flat-second-order-reflection]] supplies one flat formula bounded at both the zeroth and second weak-derivative endpoints and preserving the smaller-chart support.

[F3] [[math:def-bounded-c-k-domain-and-boundary-charts|Bounded $C^k$ domains and boundary charts]] supplies the one-sided smooth graph charts and their compact-patch derivative bounds. [[math:thm-heine-borel-rn]] makes $\overline G$ and $\partial G$ compact. Step 1.1 below derives the finite nested chart cover from these inputs. [[math:lem-test-function-cutoffs-and-euclidean-localization]] supplies cutoffs and subordinate partitions. The construction and matched-half-patch exhaustion in proof steps 1.1, 2.1 and 2.2 of [[math:thm-extension-theorem-for-bounded-smooth-domains|Bounded $C^k$ domains admit integer-order Sobolev extension]] are applicable with $k=p=2$; we use their localization with the explicit common reflection, without asserting that separate endpoint extension operators agree.

[F4] [[math:lem-c-k-boundary-flattening-preserves-wkp-locally|$C^k$ boundary flattening preserves local $W^{k,p}$]] gives the weak chain formula for $k=2$ and change of variables on fixed compact patches, [[math:lem-weak-leibniz-rule-with-a-smooth-factor]] gives cutoff derivative bounds through order two, and [[math:lem-compact-support-zero-extension-in-wkp]] gives zero extension of the compact interior and compact ambient-chart pieces.

[F5] [[math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]] identifies $W^{j,2}(\mathbb R^n;\mathbb C)$ with the Bessel-potential $H^j$ via the unique regular-distribution $L^2$ representative, for $j=0,2$. Its norms are equivalent at $j=2$ and equal at $j=0$, with the prescribed $2\pi$ Fourier normalization. Restricting this identification to real-valued classes gives the stated real convention with the same bounds.

[F6] [[math:def-sobolev-space-wkp-and-its-norm]] defines the weak spaces over $\mathbb R$ and $\mathbb C$ as almost-everywhere $L^2$ classes with all weak derivatives through the stated integer order in $L^2$, with the derivative-sum norm and $W^{0,2}=L^2$. [[math:def-real-order-bessel-potential-sobolev-space]] defines whole-space $H^j$ as the weighted-Schwartz completion; F5 supplies the $L^2$ identification used in the local definition of $\mathcal R_j$.

[F7] [[math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces]] gives restriction to every open subset as a contraction on $W^{k,p}$ for every admitted order and exponent, over either scalar field, and identifies the restricted weak derivatives. We use $k=0,2$ and $p=2$.

## Proof

**Goal:** Establish every assertion of the Statement under the stated hypotheses.

**Given:** The hypotheses and data in the Statement.

1.1 At each $x\in\partial G$, choose a graph chart in the convention of F3, reversing its normal coordinate so that $G$ maps to $t>0$. Since its flattened image is open and contains the image of $x$, choose three nested doubled cylinders centered there, with successively larger positive tangential and normal radii, whose outer closure lies inside that image and whose inverse image lies compactly in $V$. For $n=1$ only the normal intervals occur. The inverse images of the innermost cylinders form a boundary cover; compactness of $\partial G$ gives finitely many. The compact set left in $\overline G$ after removing these innermost patches misses $\partial G$ and lies in $G$, so finitely many balls with closures in $G$ give a relatively compact interior open set covering it. Apply the partition supplier to the resulting finite cover of a neighborhood $N$ of $\overline G$. Choose a compact neighborhood of $\overline G$ in $N$; local finiteness leaves only finitely many partition pieces meeting it. Group those by cover member and extend their compactly supported sums by zero outside $N$. The resulting ambient smooth $\rho_0,\ldots,\rho_m$ sum to $1$ on $G$, with $\operatorname{supp}\rho_0\Subset G$ and the other supports compactly in the innermost patches. The intervening and outer cylinders provide the positive margins required by the common reflection. Choose $\psi_i$ compactly supported in each outer chart and equal to $1$ near $\operatorname{supp}\rho_i$. All these choices precede $u$, and their finitely many supports lie compactly in $V$. [F1, F2, F3, given]

2.1 For $i>0$ flatten $\rho_i u$ to the positive half-cylinder and extend it by zero across only the lateral and top artificial edges, as a function $f_i$ on $H_+$. At order zero, change of variables bounds this map on $L^2$. At order two the weak chain rule has first derivatives bounded by a constant times the first input derivatives, and second derivatives bounded by a constant times the first and second input derivatives; these constants depend on the bounded first and second derivatives of the chart and its inverse on the larger closed patch. To handle the half-patch reaching $t=0$, apply the local chain formula on an exhaustion of matched interior subpatches. The same ambient bounds apply on every subpatch; all tests are covered and increasing the integrals gives the norm bound on the whole half-patch. The localized function vanishes near the artificial edges, so tests in $H_+$ prove that its zero extension across those edges has the corresponding weak derivatives extended by zero. No test in $H_+$ crosses the true boundary $t=0$. [F3, F4, F6, F7, step 1.1]

3.1 Apply the common reflection to $f_i$, pull the result back to the larger doubled chart, multiply by $\psi_i$ and extend the product by zero outside the ambient chart. Call this $E_i u$. The support assertion of the flat lemma and the chosen chart margins keep the reflected support in the larger chart. Chart, reflection and cutoff bounds give $\|E_i u\|_2\le C_i\|u\|_{L^2(G)}$ and $\|E_i u\|_{W^{2,2}}\le C_i^{\prime}\|u\|_{W^{2,2}(G)}$. The same operations act on $L^2$ representatives and on their weakly differentiable subclass; all coordinate maps preserve null sets. On $G$, the reflected positive side is unchanged and $\psi_i\rho_i=\rho_i$, so $r_GE_i u=\rho_i u$. [F2, F3, F4, step 2.1]

4.1 Let $E_0u$ be the zero extension of $\rho_0u$ and define $E_Gu=E_0u+\sum_{i=1}^mE_i u$. This is one linear formula on all of $L^2(G)$; the preceding estimates give both endpoint bounds for its restriction to $W^{2,2}(G)$. Restriction gives $r_GE_Gu=u$. Its support is contained in the fixed union of the compact interior and ambient-chart cutoffs, so the same compact $K\Subset V$ works for every input. [F3, F4, step 1.1, step 3.1, algebra]

5.1 If $u=r_GF\in\mathcal R_2(G;\mathbb K)$, F5 identifies $F$ with its weak $W^{2,2}$ class and F7 restricts that class and each of its derivatives to $G$, giving $\|u\|_{W^{2,2}(G)}\le C\|F\|_{H^2}$. Conversely, if $u\in W^{2,2}(G;\mathbb K)$, step 4.1 and F5 give the whole-space extension $E_Gu\in H^2$ with $\|E_Gu\|_{H^2}\le C'\|u\|_{W^{2,2}(G)}$. In the real case the same construction preserves real values, so this extension also lies in the specified real subspace. Infimizing the first bound over exactly the extensions in the definition of $\mathcal R_2$ and using $E_Gu$ for the second gives $C^{-1}\|u\|_{W^{2,2}(G)}\le\|u\|_{\mathcal R_2}\le C'\|u\|_{W^{2,2}(G)}$. This proves equality of the spaces and equivalence of norms; definiteness of the infimum follows also from $\|u\|_{L^2(G)}\le\|F\|_{H^2}$, while homogeneity and the triangle inequality follow by scaling and adding extensions and then taking infima. At order zero F5 and F7 give $\|u\|_2\le\|F\|_{H^0}$ for every extension. Extension by zero of any $L^2(G)$ class has exactly the same $L^2=H^0$ norm, since its squared integral outside $G$ is zero. Thus every such class belongs to $\mathcal R_0$ and its infimum norm is exactly $\|u\|_2$. [F5, F6, F7, step 4.1, algebra] ∎
