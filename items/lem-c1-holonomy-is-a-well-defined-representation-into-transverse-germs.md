---
id: lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs
kind: lemma
title: "Holonomy of a C¹ foliation is a representation into C¹ transverse germs"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-c1-regular-codimension-one-foliation-and-transverse-orientation, def-c1-germ-of-a-local-diffeomorphism-at-a-point, lem-c1-germs-of-local-diffeomorphisms-form-a-group, def-based-loops-and-fundamental-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§4.2, printed pp. 140–143 (construction and homotopy invariance of holonomy transport)"
    - title: "David Gabai, Commentary on Thurston's Foliations and the Thurston norm"
      url: "https://web.math.princeton.edu/facultypapers/Gabai/Commentary-Thurston-Foliations.pdf"
      locator: "Theorem 0.8, PDF p. 2 (C¹ foliation setting)"
dependency_level: 2
---

## Statement

Let $F$ be a transversely oriented $C^1$ codimension-one foliation, $L$ a
leaf, $x\in L$, and $T$ a local $C^1$ transversal to $F$ at $x$. Plaque
transport along leafwise loops defines a homomorphism
$$\rho_x:\pi_1(L,x)\to\operatorname{Diff}^{1,+}_x(T)$$
that is independent of the chosen chains of foliation charts and invariant
under leafwise homotopies relative to endpoints.

## Facts & Assumptions

**Given:** A transversely oriented $C^1$ codimension-one foliation $F$, a leaf $L$, a point $x\in L$, and a local $C^1$ transversal $T$ at $x$.

[F1] In a $C^1$ foliation atlas the transition on an overlap has the form $(x_\beta,t_\beta)=(g_{\beta\alpha}(x_\alpha,t_\alpha),h_{\beta\alpha}(t_\alpha))$ with $h_{\beta\alpha}$ a one-dimensional $C^1$ local diffeomorphism, and transverse orientability means that the coordinates can be signed so that every $h_{\beta\alpha}$ is increasing ([[def-c1-regular-codimension-one-foliation-and-transverse-orientation]]).

[F2] For a one-dimensional $C^1$ manifold $T$ and $x\in T$, the $C^1$ germs of local diffeomorphisms fixing $x$ form a group $\operatorname{Diff}^1_x(T)$ under composition, with the orientation-preserving germs forming the subgroup $\operatorname{Diff}^{1,+}_x(T)$ ([[def-c1-germ-of-a-local-diffeomorphism-at-a-point]], [[lem-c1-germs-of-local-diffeomorphisms-form-a-group]]).

[F3] Based loops at $x$ are paths starting and ending at $x$; two based loops are equivalent when they are path-homotopic relative to endpoints, $\pi_1(X,x)$ is the set of classes, and the multiplication convention is $[\alpha][\beta]=[\alpha*\beta]$ with $\alpha*\beta$ traversing $\alpha$ first ([[def-based-loops-and-fundamental-group]]).

## Proof

**Proof technique:** direct.

1.1 (Transport along a chart chain.) Let $a:I\to L$ be a leafwise loop at $x$. Cover the compact image $a(I)$ by finitely many foliation charts and subdivide $I$ so that each subinterval is mapped by $a$ into a single chart of the cover. Shrink the transversal $T$ so that all the finitely many transitions between consecutive charts are defined on the successive images of $T$; each crossing transports $T$ along the transverse coordinate change $h_{\beta\alpha}$, a one-dimensional $C^1$ local diffeomorphism [F1]. Composing the finitely many resulting germs at $x$ gives an element $\Phi_a\in\operatorname{Diff}^1_x(T)$ [F2]. [F1, F2]

1.2 (Independence of the chain.) Two chains of charts for the same loop admit a common refinement by foliation charts. Inserting an intermediate chart replaces one transition germ $h$ by a composite $h=h_2\circ h_1$ of the two induced transverse transitions, and composition in $\operatorname{Diff}^1_x(T)$ is associative [F2], so the composite germ does not change. Hence $\Phi_a$ is well defined, independently of the chosen cover, subdivision and chart chain. [F1, F2]

2.1 (Invariance under leafwise homotopy.) Let $a_s$, $s\in[0,1]$, be a homotopy of leafwise loops at $x$ relative to the endpoints. The parameter square is compact, so it is subdivided into finitely many small rectangles each of which is carried by the homotopy into a single foliation chart [F1]. Within a chart the transverse coordinate is constant along plaques, so moving the path across a rectangle does not change the transverse transport germ; hence the transports along the two boundary paths of each rectangle agree, and gluing the rectangles along their edges shows that the transport along $a_0$ equals that along $a_1$. Therefore $\Phi_a$ depends only on the class $[a]\in\pi_1(L,x)$ [F3]. [F1, F3, step 1.2]

3.1 (Homomorphism and orientation.) For composable loops $\alpha,\beta$ the concatenation $\alpha*\beta$ travels along $\alpha$ first and then along $\beta$, so the transport satisfies $\Phi_{\alpha*\beta}=\Phi_\beta\circ\Phi_\alpha$; defining $\rho_x([\alpha]):=\Phi_{\alpha^{-1}}$ on the reversed loop therefore gives $\rho_x([\alpha][\beta])=\rho_x([\alpha])\circ\rho_x([\beta])$, so $\rho_x$ is a homomorphism [F2, F3, step 2.1]. Transverse orientability makes every transverse transition increasing, so every transport germ has positive derivative; the same holds for the reversed loop, whence the image lies in $\operatorname{Diff}^{1,+}_x(T)$ [F1, F2]. [F1, F2, F3, step 2.1]

4.1 Plaque transport along leafwise loops therefore defines a well-defined homomorphism $\rho_x:\pi_1(L,x)\to\operatorname{Diff}^{1,+}_x(T)$ independent of chart chains and invariant under leafwise homotopies relative to endpoints, as claimed. [step 1.1, step 1.2, step 2.1, step 3.1] ∎
