---
id: lem-unit-circle-is-a-compact-metrizable-topological-group
kind: lemma
title: "The multiplicative unit circle is a compact metrizable topological abelian group"
deps:
- def-complex-exponential
- thm-complex-exponential-addition-and-real-extension
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- def-real-exponential-function-and-e
- thm-sine-and-cosine-derivatives
- cor-differentiable-implies-continuous
- thm-sine-and-cosine-parametrize-the-unit-circle
- thm-sine-cosine-zero-sets-and-fundamental-period
- thm-quarter-turn-values-and-shift-formulas
- def-the-one-dimensional-torus-and-normalized-haar-integral
- prop-real-line-mod-integers-is-compact-and-path-connected
- def-quotient-group
- thm-quotient-universal-property
- thm-compactness-under-continuous-maps
- thm-metric-hausdorff-separation
- def-homeomorphism-and-open-maps
- def-subspace-topology-top
- def-isometry-and-metric-embedding
- thm-complex-numbers-are-the-real-coordinate-plane
- def-complex-metric-convergence-and-continuity
- def-metric-continuity
- lem-complex-conjugation-and-modulus-laws
- lem-continuity-is-local-and-pastes
- thm-product-universal-property
- def-topological-group
- def-continuous-map-top
- thm-algebra-of-continuous-functions
- def-product-topology
- cor-heine-borel-in-the-product-topology
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-10.md; immutable carrier: research/frontier-38-owner-30-step5-hash-10-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-10 dispatch"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: "Dikran D. Dikranjan, Introduction to Topological Groups (author lecture notes, Universita di Udine / Universidad Complutense de Madrid, 2007)"
    url: "http://www.mat.ucm.es/imi/documents/20062007_Dikran.pdf"
    locator: "Introduction (T = R/Z is a compact divisible abelian group topologically isomorphic to the unitary circle S) and Section 7.1 (printed pp. 46-47); full text read."
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
    locator: "Appendix C.1, the circle as R/Z with its compact group structure (printed pp. 429-439)."
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand 1953, Chapter VII, Sections 34-35 (printed pp. 134-140)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
    locator: "Section 34 introduction, printed pp. 134-135: modulus-one characters; Section 34D, printed pp. 137-138: pointwise group operations."
status: published
origin: pipeline
proof_strategy: direct
---
## Statement

Let $\mathbb T:=\{z\in\mathbb C:|z|=1\}$ carry the subspace topology of
$\mathbb C$ ([[def-subspace-topology-top]],
[[def-complex-metric-convergence-and-continuity]]) and the multiplication of
$\mathbb C$, and let $\varepsilon:\mathbb R/\mathbb Z\to\mathbb T$,
$\varepsilon([t]):=\exp(2\pi i t)$, for the published one-dimensional torus
$\mathbb R/\mathbb Z$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]]).
Then $\mathbb T$ is a compact metrizable topological abelian group
([[def-topological-group]]), $\varepsilon$ is an isomorphism of topological
groups, and
$$|zw-z|=|w-1|,\qquad |z^{-1}-w^{-1}|=|z-w|$$
for all $z,w\in\mathbb T$.

## Facts & Assumptions

[F1] For all complex $z,w$, $\exp(z+w)=\exp z\exp w$, and for real $x,y$, $\exp(x+iy)=e^{x}(\cos y+i\sin y)$ with $|\exp(x+iy)|=e^{x}$. The real exponential satisfies $e^{0}=1$ (its defining series has constant term $1$ and all other terms $0$). ([[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[def-real-exponential-function-and-e]])

[F2] $\sin$ and $\cos$ are differentiable on $\mathbb R$, hence continuous, and $\sin 0=0$, $\cos 0=1$. ([[thm-sine-and-cosine-derivatives]], [[cor-differentiable-implies-continuous]])

[F3] $\sin$ and $\cos$ have period $2\pi$: $\sin(x+2\pi)=\sin x$ and $\cos(x+2\pi)=\cos x$ for every real $x$. ([[thm-sine-cosine-zero-sets-and-fundamental-period]])

[F4] $t\mapsto(\cos t,\sin t)$ is a bijection from $[0,2\pi)$ onto the Euclidean unit circle $S^{1}=\{(a,b):a^{2}+b^{2}=1\}$. ([[thm-sine-and-cosine-parametrize-the-unit-circle]])

[F5] $\Phi:\mathbb C\to\mathbb R^{2}$, $\Phi(a+bi)=(a,b)$, is a bijection compatible with addition and multiplication; $d_{\mathbb C}(z,w)=|z-w|=\lVert\Phi(z)-\Phi(w)\rVert_{2}$. For all $z,w\in\mathbb C$, $z\overline z=|z|^{2}$, $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$. Continuity of maps between subsets of $\mathbb C$ is continuity for the metric $d_{\mathbb C}$. ([[thm-complex-numbers-are-the-real-coordinate-plane]], [[def-complex-metric-convergence-and-continuity]], [[def-metric-continuity]], [[lem-complex-conjugation-and-modulus-laws]])

[F6] The canonical projection $q:\mathbb R\to\mathbb R/\mathbb Z$ is continuous and open, $[s]=[t]$ exactly when $s-t\in\mathbb Z$, every class has exactly one representative in $[0,1)$, and $\mathbb R/\mathbb Z$ is the quotient group of the additive group $\mathbb R$ by its subgroup $\mathbb Z$, with $[s]+[t]=[s+t]$. Moreover $\mathbb R/\mathbb Z$ is compact. ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[def-quotient-group]], [[prop-real-line-mod-integers-is-compact-and-path-connected]])

[F7] Quotient universal property: a continuous map $g:\mathbb R\to W$ constant on the fibres of $q$ factors uniquely as $g=\bar g\circ q$ with $\bar g$ continuous. ([[thm-quotient-universal-property]])

[F8] The product topology on $\mathbb R^2$ is the Euclidean metric topology. A map into a product is continuous exactly when all its components are; a composite of continuous maps is continuous; the identity and scalar multiples $\alpha\,\mathrm{id}$ of real functions are continuous. ([[cor-heine-borel-in-the-product-topology]], [[thm-product-universal-property]], [[lem-continuity-is-local-and-pastes]], [[thm-algebra-of-continuous-functions]])

[F9] Continuous images of compact spaces are compact; a continuous bijection from a compact space onto a Hausdorff space is a homeomorphism. A metric space is Hausdorff, and the metric topology of a metric subspace is its subspace topology. ([[thm-compactness-under-continuous-maps]], [[thm-metric-hausdorff-separation]], [[def-isometry-and-metric-embedding]])

[F10] A topological group is a group whose multiplication and inversion are continuous for the product topology. ([[def-topological-group]])

## Proof

**Given:** The multiplicative unit circle $\mathbb T\subseteq\mathbb C$ with the subspace topology, and $\varepsilon([t])=\exp(2\pi it)$ on the published torus $\mathbb R/\mathbb Z$.

1.1 For every integer $k$, $\exp(2\pi ik)=1$: by [F1] and [F3] with [F2], $\exp(2\pi ik)=e^{0}\big(\cos(2\pi k)+i\sin(2\pi k)\big)=\cos 0+i\sin 0=1$, because $2\pi k$ is an integer multiple of the period $2\pi$ of sine and cosine. [F1, F2, F3]

1.2 The image of $\varepsilon$ lies in $\mathbb T$: for real $t$, $|\exp(2\pi it)|=e^{0}=1$ by [F1]. [F1]

1.3 $\varepsilon$ is surjective onto $\mathbb T$: if $z=a+bi\in\mathbb T$ then $a^{2}+b^{2}=|z|^{2}=1$ by [F5], so $(a,b)\in S^{1}$ and [F4] gives $\theta\in[0,2\pi)$ with $(a,b)=(\cos\theta,\sin\theta)$; putting $t:=\theta/(2\pi)\in[0,1)$ and using [F1] and [F5] gives $\varepsilon([t])=\exp(2\pi it)=\cos\theta+i\sin\theta=a+bi=z$. [F1, F4, F5]

1.4 $\mathbb T$ is closed under multiplication and inversion, and the two displayed identities hold: for $z,w\in\mathbb T$, $|zw|=|z||w|=1$ and $|z^{-1}|=|z|^{-1}=1$ by [F5], so $zw,z^{-1}\in\mathbb T$; also $|zw-z|=|z||w-1|=|w-1|$ and $|z^{-1}-w^{-1}|=|w-z|/(|z||w|)=|z-w|$ by [F5]. [F5]

2.1 $\varepsilon$ is well defined on classes and is a group homomorphism: if $[s]=[t]$ then $s-t=k\in\mathbb Z$ by [F6], so $\exp(2\pi is)=\exp(2\pi it)\exp(2\pi ik)=\exp(2\pi it)$ by [F1] and step 1.1; and $\varepsilon([s]+[t])=\exp(2\pi i(s+t))=\exp(2\pi is)\exp(2\pi it)=\varepsilon([s])\varepsilon([t])$ by [F1] and [F6]. [step 1.1, F1, F6]

3.1 $\varepsilon$ is injective: if $\varepsilon([s])=\varepsilon([t])$, replace the classes by their unique representatives $s,t\in[0,1)$ by [F6]; then $\cos(2\pi s)=\cos(2\pi t)$ and $\sin(2\pi s)=\sin(2\pi t)$ by [F1] and [F5], so the bijectivity in [F4] applied to $2\pi s,2\pi t\in[0,2\pi)$ gives $2\pi s=2\pi t$, hence $s=t$, hence $[s]=[t]$. [step 2.1, F1, F4, F5, F6]

3.2 $\varepsilon$ is continuous as a map $\mathbb R/\mathbb Z\to\mathbb C$: the map $g(t):=\exp(2\pi it)$ is continuous on $\mathbb R$ because $t\mapsto 2\pi t$, $\sin$ and $\cos$ are continuous by [F2] and [F8], hence $t\mapsto(\cos 2\pi t,\sin 2\pi t)$ is continuous into $\mathbb R^{2}$ by [F8], and $g=\Phi^{-1}(\cos 2\pi\cdot,\sin 2\pi\cdot)$ is continuous by [F5], [F8] and the distance identity $d_{\mathbb C}(z,w)=\lVert\Phi(z)-\Phi(w)\rVert_{2}$ read as $\varepsilon$-$\delta$ continuity of $\Phi^{-1}$; by step 2.1 $g$ is constant on the fibres of $q$, so the quotient universal property [F7] makes $\varepsilon$ continuous into $\mathbb C$, and its corestriction to the subspace $\mathbb T$ is continuous by the subspace topology. [step 2.1, step 1.2, F2, F5, F7, F8]

4.1 $\mathbb T$ is compact: it is the image $\varepsilon(\mathbb R/\mathbb Z)$ by step 1.3 of the compact space $\mathbb R/\mathbb Z$ under the continuous map of step 3.2, and continuous images of compact spaces are compact by [F9]. [step 1.3, step 3.2, F6, F9]

4.2 $\varepsilon$ is a homeomorphism onto $\mathbb T$: it is a continuous bijection by steps 2.1, 3.1, 1.3 and 3.2 whose domain is compact by [F6] and whose image lies in $\mathbb T$ by step 1.2, and $\mathbb T$ is Hausdorff as a subspace of the metric space $\mathbb C$ by [F5] and [F9]; the compact-to-Hausdorff clause of [F9] applies to the corestriction. [step 1.2, step 3.1, step 1.3, step 3.2, F5, F6, F9]

5.1 Multiplication and inversion on $\mathbb T$ are continuous, so $\mathbb T$ is a topological abelian group: for $z,z_{0},w,w_{0}\in\mathbb T$, $|zw-z_{0}w_{0}|\le|z-z_{0}||w|+|z_{0}||w-w_{0}|=|z-z_{0}|+|w-w_{0}|$ by [F5], so the open rectangle $\big(B(z_{0},\delta)\cap\mathbb T\big)\times\big(B(w_{0},\delta)\cap\mathbb T\big)$ with $\delta=\varepsilon/2$ is mapped into $B(z_{0}w_{0},\varepsilon)\cap\mathbb T$, which is continuity of multiplication at $(z_{0},w_{0})$; and $|z^{-1}-w^{-1}|=|z-w|$ by step 1.4 makes inversion distance preserving, hence continuous. Group axioms and commutativity are inherited from $\mathbb C$ by steps 2.1, 3.1 and 1.3, and metrizability of $\mathbb T$ is [F9] applied to the metric subspace $\mathbb T\subseteq\mathbb C$. [step 4.2, step 1.4, F5, F9, F10] ∎
