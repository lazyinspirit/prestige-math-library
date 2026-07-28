---
id: thm-the-exponential-law
kind: theorem
title: "The exponential law: for a locally compact metric $X$ and any spaces $Z$ and $Y$, transposition is a bijection between $C(X \\times Z, Y)$ and $C(Z, C(X,Y))$ with the compact-open topology"
status: published
origin: session
deps: [thm-exponential-correspondence-is-continuous,
       thm-evaluation-is-continuous-on-a-locally-compact-metric-domain,
       def-evaluation-map, def-compact-open-topology, def-locally-compact-metric-space,
       def-product-topology, thm-product-universal-property, def-continuous-map-top,
       lem-continuity-is-local-and-pastes, def-injection-surjection-bijection,
       def-topological-space, def-metric-space, def-metric-topology,
       def-metrizable-space, thm-continuity-characterisations-top,
       def-metric-compactness]
justified_by: []
aliases: [thm-exponential-law]
landmark: true
short: "exponential law (bijection)"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Compact-open topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact-open_topology"
    - title: "Exponential object (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponential_object"
    - title: "J. Munkres, Topology, 2nd ed., §46"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a **locally compact** metric space
([[def-locally-compact-metric-space]]) carrying its metric topology, and let $Z$
and $Y$ be topological spaces ([[def-topological-space]]). Give $C(X,Y)$ the
compact-open topology ([[def-compact-open-topology]]) and $X \times Z$ the
product topology ([[def-product-topology]]). Define, for
$f \in C(X \times Z, Y)$,

$$\Phi(f) : Z \to C(X,Y), \qquad \Phi(f)(z)(x) := f(x,z) .$$

Then $\Phi$ is a well-defined map
$C(X \times Z, Y) \to C\big(Z, C(X,Y)\big)$ and it is a **bijection**
([[def-injection-surjection-bijection]]); its inverse sends a continuous
$F : Z \to C(X,Y)$ to the continuous map $(x,z) \mapsto F(z)(x)$.

### Exactly what is and is not claimed

**This is an assertion about two *sets* of continuous maps and a bijection
between them.** No topology is placed on $C(X \times Z, Y)$ or on
$C(Z, C(X,Y))$ anywhere in the statement, and **it is not claimed that $\Phi$ is
a homeomorphism.** The homeomorphism form of the exponential law is a genuinely
stronger statement, and this library does not have what it needs; the last remark
below says exactly what is missing. A reader who wants the categorical slogan
"$Y^{X \times Z} \cong (Y^{X})^{Z}$" should read it here as a bijection of
underlying sets, natural in the evident way, and no more.

No choice principle is used.

## Facts & Assumptions

**Given:** A locally compact metric space $(X,d)$ with its metric topology, topological spaces $Z$ and $Y$, the set $C(X,Y)$ with the compact-open topology, the evaluation map $e : C(X,Y) \times X \to Y$ ([[def-evaluation-map]]), and the assignment $\Phi$ of the Statement.

[L1] If $f : X \times Z \to Y$ is continuous then $\Phi(f)(z) \in C(X,Y)$ for every $z$, and $\Phi(f) : Z \to C(X,Y)$ is continuous for the compact-open topology ([[thm-exponential-correspondence-is-continuous]]).

[L2] $e$ is continuous, $X$ being locally compact ([[thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]], [[def-evaluation-map]]).

[L3] A map into a product is continuous exactly when both its components are, and the projections of a product are continuous ([[thm-product-universal-property]], claims 1 and 2, [[def-product-topology]]).

[L4] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]], claim 1); and continuity is preimages of open sets being open ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

[L5] Two functions with the same domain are equal exactly when they take the same value at every point of it; an element of $X \times Z$ is determined by its two coordinates ([[def-product-topology]], [[def-injection-surjection-bijection]]).

[L6] A map is a bijection exactly when it is injective and surjective ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 Let $f \in C(X \times Z, Y)$; by [L1] each $\Phi(f)(z)$ lies in $C(X,Y)$ and $\Phi(f)$ is a continuous map $Z \to C(X,Y)$, so $\Phi(f) \in C(Z, C(X,Y))$ and $\Phi$ is well defined. [L1]

1.2 Let $F \in C(Z, C(X,Y))$ and define $\Psi(F) : X \times Z \to Y$ by $\Psi(F)(x,z) := F(z)(x)$; this is a function, $F(z)$ being an element of $C(X,Y)$ and hence a function $X \to Y$. [L5, construct]

2.1 Let $h : X \times Z \to C(X,Y) \times X$ be given by $h(x,z) := (F(z), x)$; its two components are $(x,z) \mapsto F(z)$, which is the composite of the projection onto $Z$ with $F$, and $(x,z) \mapsto x$, which is the projection onto $X$; both are continuous, so $h$ is continuous. [step 1.2, L3, L4]

2.2 $\Phi$ is injective: if $\Phi(f) = \Phi(f')$ then for all $x \in X$ and $z \in Z$ we get $f(x,z) = \Phi(f)(z)(x) = \Phi(f')(z)(x) = f'(x,z)$, so $f = f'$. [step 1.1, L5]

3.1 $\Psi(F) = e \circ h$, since $(e \circ h)(x,z) = e(F(z), x) = F(z)(x) = \Psi(F)(x,z)$ for every $(x,z)$; hence $\Psi(F)$ is continuous, that is $\Psi(F) \in C(X \times Z, Y)$. [step 1.2, step 2.1, L2, L4, L5]

4.1 $\Phi$ is surjective: given $F \in C(Z,C(X,Y))$, step 3.1 puts $\Psi(F)$ in $C(X \times Z, Y)$, and for all $z \in Z$ and $x \in X$ we have $\Phi(\Psi(F))(z)(x) = \Psi(F)(x,z) = F(z)(x)$, so $\Phi(\Psi(F))(z) = F(z)$ for every $z$ and hence $\Phi(\Psi(F)) = F$. [step 1.1, step 3.1, L5]

5.1 By steps 2.2 and 4.1 the map $\Phi$ is a bijection from $C(X \times Z, Y)$ onto $C(Z, C(X,Y))$, and step 4.1 identifies its inverse as $\Psi$, that is $F \mapsto ((x,z) \mapsto F(z)(x))$. [step 2.2, step 4.1, L6] ∎

## Remarks

- **Where each hypothesis is spent.** Continuity of $\Phi(f)$, which is injectivity's half of the correspondence, needs nothing beyond compactness being available for subsets of $X$ ([[thm-exponential-correspondence-is-continuous]]). Surjectivity is where local compactness enters, and it enters once, through continuity of the evaluation map at step 3.1 ([[thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]]). Without it the map $\Psi(F)$ need not be continuous and $\Phi$ need not be onto.

- **What the homeomorphism form would additionally need, stated precisely.** To say that $\Phi$ is a homeomorphism one must first topologise both sides, which means giving $C(X \times Z, Y)$ a compact-open topology built over the compact subsets of $X \times Z$, and $C(Z, C(X,Y))$ one built over the compact subsets of $Z$. Neither is available here: $Z$ is an arbitrary topological space, and this library defines compactness only for metric spaces ([[def-metric-compactness]]), so "compact subset of $Z$" and "compact subset of $X \times Z$" have no meaning at this point in the reading order. Supplying them needs the page that defines compactness for arbitrary topological spaces; on top of that, the standard proof of the homeomorphism form needs a tube lemma for a compact factor of an arbitrary product, and, for the direction that $\Phi^{-1}$ is continuous, that a compact subset of $X \times Z$ be covered by finitely many products of compacta. None of that is proved here, and nothing above assumes it.

- **The bijection is what the name usually denotes.** Most treatments state the exponential law first as this correspondence and only afterwards ask when it is a homeomorphism, the answer requiring hypotheses on $Z$ as well as on $X$. The scope taken here is therefore the standard first form, and it is stated as such rather than as a weakened version of something else.

- **The companion page traces the correspondence through an explicit example**, the multiplication map on $\mathbb{R} \times \mathbb{R}$ and its transpose, and checks both halves by hand.
