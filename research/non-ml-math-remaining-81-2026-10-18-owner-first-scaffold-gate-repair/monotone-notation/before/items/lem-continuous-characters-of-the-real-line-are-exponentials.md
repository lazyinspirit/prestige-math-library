---
id: lem-continuous-characters-of-the-real-line-are-exponentials
kind: lemma
title: "Continuous characters of the real line are exponentials"
deps:
- lem-unit-circle-is-a-compact-metrizable-topological-group
- def-the-one-dimensional-torus-and-normalized-haar-integral
- thm-real-line-covers-real-line-mod-integers
- thm-covering-space-lifting-criterion
- def-simply-connected
- thm-convex-subsets-have-trivial-fundamental-group
- cor-rn-is-polygonally-connected-and-locally-path-connected
- thm-cauchy-functional-equation-regularity
- def-lift-of-a-map-path-and-homotopy
- def-path-connected
- cor-connected-subsets-of-the-line
- thm-continuous-image-of-a-connected-space
- def-connected-space
- def-continuous-map-top
- lem-continuity-is-local-and-pastes
- thm-complex-exponential-addition-and-real-extension
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- def-complex-exponential
- thm-algebra-of-continuous-functions
- def-group-homomorphism
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-10.md"
      - "research/frontier-38-owner-30-alpha-batch-10-5a.md"
      - "research/frontier-38-owner-30-step5-hash-10-post.json"
    reviewed_raw_sha256: "497e890acc3ff1d85ecef917ed1f8f019abca645fb5305fc859f8f473085b47a"
    content_sha256: "b6bc764bdbe04a4e87d36fbc489e78b320249e86da85b8759ea9fc8496290d2e"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: "Dikran D. Dikranjan, Introduction to Topological Groups (author lecture notes, Universita di Udine / Universidad Complutense de Madrid, 2007)"
    url: "http://www.mat.ucm.es/imi/documents/20062007_Dikran.pdf"
    locator: "Section 7.2, Lemma 7.5 and Example 7.7, printed pp. 48-49: circle endomorphisms and the real-line dual. The covering-space proof is supplied here."
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
    locator: "Appendix C.3, Example C.14(2), printed p. 438: real-line characters are parametrized by exponentials. The covering-space argument is supplied here."
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand 1953, Chapter VII, Sections 34-35 (printed pp. 134-140)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
    locator: "Section 35C: the characters of the additive line are the maps t -> exp(2 pi i xi t)."
status: published
origin: pipeline
proof_strategy: direct
---
## Statement

Every continuous group homomorphism $\varphi:\mathbb R\to\mathbb T$ from the
additive line to the multiplicative unit circle
([[lem-unit-circle-is-a-compact-metrizable-topological-group]]) is
$\varphi(t)=\exp(2\pi i\xi t)$ for a unique $\xi\in\mathbb R$; conversely every
such map $\varphi_{\xi}(t)=\exp(2\pi i\xi t)$ is a continuous character of the
additive line.

## Facts & Assumptions

[F1] $\varepsilon:\mathbb R/\mathbb Z\to\mathbb T$, $\varepsilon([t])=\exp(2\pi it)$, is an isomorphism of topological groups; in particular $\varepsilon$ and its inverse are continuous, $\varepsilon([0])=1$, and $\varepsilon([t])$ has modulus $1$ for every real $t$. ([[lem-unit-circle-is-a-compact-metrizable-topological-group]])

[F2] $p:\mathbb R\to\mathbb R/\mathbb Z$, $p(t)=[t]$, is a covering map, it is the quotient homomorphism of the additive group $\mathbb R$ modulo $\mathbb Z$, so $p(u+v)=p(u)+p(v)$, and $p(u)=[0]$ exactly when $u\in\mathbb Z$. ([[thm-real-line-covers-real-line-mod-integers]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]])

[F3] $\mathbb R$ is path-connected and locally path-connected, and it is simply connected: its fundamental group at $0$ is trivial. ([[cor-rn-is-polygonally-connected-and-locally-path-connected]], [[thm-convex-subsets-have-trivial-fundamental-group]], [[def-simply-connected]], [[def-path-connected]])

[F4] Lifting criterion: for a path-connected and locally path-connected $Y$, a based map $f:(Y,y_{0})\to(B,b_{0})$ and a covering $p:(E,e_{0})\to(B,b_{0})$, a based lift of $f$ exists if and only if $f_{*}\pi_{1}(Y,y_{0})\subseteq p_{*}\pi_{1}(E,e_{0})$, and it is unique. ([[thm-covering-space-lifting-criterion]], [[def-lift-of-a-map-path-and-homotopy]])

[F5] The continuous image of a connected space is connected, and a connected subset of $\mathbb R$ is order-convex. ([[thm-continuous-image-of-a-connected-space]], [[cor-connected-subsets-of-the-line]], [[def-connected-space]])

[F6] An additive function $f:\mathbb R\to\mathbb R$ that is continuous at a single point satisfies $f(x)=f(1)x$ for every real $x$. ([[thm-cauchy-functional-equation-regularity]])

[F7] $\exp(z+w)=\exp z\exp w$ for complex $z,w$; $\exp(x+iy)=e^{x}(\cos y+i\sin y)$, so $|\exp(iy)|=1$ and $\exp(0)=1$; and $e^{i\pi}+1=0$. ([[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[def-complex-exponential]])

[F8] Composites of continuous maps are continuous, and the identity together with its real scalar multiples $t\mapsto\xi t$ are continuous. ([[lem-continuity-is-local-and-pastes]], [[thm-algebra-of-continuous-functions]])

## Proof

**Given:** A continuous group homomorphism $\varphi:\mathbb R\to\mathbb T$ of the additive line.

1.1 The map $\psi:=\varepsilon^{-1}\circ\varphi:\mathbb R\to\mathbb R/\mathbb Z$ is a continuous group homomorphism with $\psi(0)=[0]$: $\varepsilon^{-1}$ is continuous by [F1], $\mathbb R$ is path-connected by [F3], and $\psi(0)=\varepsilon^{-1}(\varphi(0))=\varepsilon^{-1}(1)=[0]$ because a group homomorphism sends the identity to the identity ([[def-group-homomorphism]]) and $\varepsilon([0])=1$ by [F1]. [F1, F3, F8]

2.1 There is a continuous lift $\theta:\mathbb R\to\mathbb R$ with $p\circ\theta=\psi$ and $\theta(0)=0$: the domain $\mathbb R$ is path-connected and locally path-connected and its fundamental group at $0$ is trivial by [F3], so $\psi_{*}\pi_{1}(\mathbb R,0)\subseteq p_{*}\pi_{1}(\mathbb R,0)$ holds vacuously, and the lifting criterion [F4] applied to $\psi$ and the covering $p$ of [F2] supplies the based lift. [step 1.1, F2, F3, F4]

3.1 For fixed real $t$ the map $h(s):=\theta(s+t)-\theta(s)-\theta(t)$ is continuous and takes values in $\mathbb Z$: continuity is by [F8], and $p(\theta(s+t))=\psi(s+t)=\psi(s)+\psi(t)=p(\theta(s))+p(\theta(t))=p(\theta(s)+\theta(t))$ by [F2] and step 1.1, so $\theta(s+t)-\theta(s)-\theta(t)\in\ker p=\mathbb Z$ by [F2]. [step 1.1, step 2.1, F2, F8]

4.1 The image $h[\mathbb R]$ is connected by [F5], being the continuous image of the connected space $\mathbb R$; being a connected subset of $\mathbb R$ it is order-convex by [F5], and an order-convex subset of $\mathbb Z$ with two distinct elements $a<b$ would contain $a+1/2\notin\mathbb Z$, so $h[\mathbb R]$ is a singleton. Since $h(0)=\theta(t)-\theta(0)-\theta(t)=0$ by step 2.1, that singleton is $\{0\}$, so $\theta(s+t)=\theta(s)+\theta(t)$ for all real $s,t$: the lift $\theta$ is additive. [step 2.1, step 3.1, F5]

5.1 By steps 2.1 and 4.1 the map $\theta$ is additive and continuous, hence $\theta(t)=\xi t$ for every real $t$, where $\xi:=\theta(1)$, by [F6]. [step 2.1, step 4.1, F6]

6.1 Consequently $\varphi(t)=\varepsilon(\psi(t))=\varepsilon(p(\theta(t)))=\varepsilon([\theta(t)])=\exp(2\pi i\theta(t))=\exp(2\pi i\xi t)$ for every real $t$, by [F1], [F2], step 2.1 and step 5.1. [step 2.1, step 5.1, F1, F2]

7.1 The parameter $\xi$ is unique: if $\exp(2\pi i\xi t)=\exp(2\pi i\xi't)$ for all real $t$, then $\exp(2\pi i(\xi-\xi')t)=1$ for all $t$ by [F7]; were $\xi\ne\xi'$, the choice $t=1/(2|\xi-\xi'|)>0$ would give $\exp(\pm\pi i)=-1$ by [F7], contradicting $\exp(\pm\pi i)=1$; hence $\xi=\xi'$. [step 6.1, F7]

8.1 Conversely, for every real $\xi$ the map $\varphi_{\xi}(t):=\exp(2\pi i\xi t)$ is a continuous group homomorphism $\mathbb R\to\mathbb T$: it is a homomorphism by the addition formula [F7], it takes values in $\mathbb T$ because $|\exp(2\pi i\xi t)|=1$ by [F7], and it is the composite $\varepsilon\circ p\circ(t\mapsto\xi t)$ of the continuous maps $t\mapsto\xi t$ [F8], $p$ [F2] and $\varepsilon$ [F1], hence continuous by [F8]. [step 6.1, F1, F2, F7, F8] ∎
