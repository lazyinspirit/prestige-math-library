---
id: ex-ambient-isotopy-of-an-unknotted-circle-in-r-three
kind: example
title: "Extending a visible isotopy of an unknotted circle in $\\mathbb R^3$"
status: published
origin: session
dependency_level: 10
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-isotopy-extension,
       def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy,
       def-smooth-embedding,
       def-countable-choice,
       prop-a-proper-injective-immersion-is-a-smooth-embedding,
       lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension,
       def-compact-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Morris W. Hirsch, Differential Topology (Graduate Texts in Mathematics 33, Springer 1976; full text retrieved from the Internet Archive Wayback Machine snapshot of the luis.impa.br course copy), Chapter 8 “Isotopy”, §1, printed pp. 177–183 (Theorems 1.1–1.8 and Exercises 3, 7, 9, 10, 11, 16, printed pp. 182–184)"
      url: "https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf"
    - title: "The Isotopy Extension Theorem (University of California, Riverside, graduate differential topology hand-out, 2010), complete 14-page document: statement and applications of the isotopy extension theorem, uniqueness of tubular and collar neighbourhoods, and the knotted-line counterexample to ambient extension"
      url: "https://math.ucr.edu/~res/math260s10/isotopyextension.pdf"
---

## Example

Assume $\mathrm{AC}_\omega$. Let $S^1\subseteq\mathbb R^2\times\{0\}\subseteq\mathbb R^3$ be the unit circle with inclusion map $f_0$, and let $f_1:S^1\to\mathbb R^3$ be a round circle of radius $\lambda>0$ centred at $c\in\mathbb R^3$, written as the affine image $f_1(x)=c+\lambda Qf_0(x)$ of $f_0$ for some $Q\in SO(3)$. Then there is a compactly supported ambient isotopy $H$ of $\mathbb R^3$ with $H_0=\mathrm{id}$ and $H_1\circ f_0=f_1$: every round circle is carried to every other by an ambient isotopy supported in any prescribed open neighbourhood of the entire isotopy image $F(S^1\times I)$ constructed below. The example exhibits the hypothesis check of [[thm-isotopy-extension]] in the simplest case ($M=S^1$ compact, $N=\mathbb R^3$ without boundary, no boundary stratum, no properness issue) and shows that the visible motion of a round circle is always realisable ambiently.

## Facts & Assumptions

**Given:** The unit circle $S^1$ with inclusion $f_0$, a round circle $f_1=c+\lambda Q f_0$ with $\lambda>0$, $c\in\mathbb R^3$ and $Q\in SO(3)$, and a prescribed open neighbourhood $W$ of the entire image of the affine isotopy $F$ constructed below.

[F1] An ordered orthonormal pair in $\mathbb R^3$ is completed to an element of $SO(3)$ by its cross product. Step 1.1 constructs a smooth path of rotations using a fixed axis; mere topological path connectedness is not used as a smooth-path theorem.

[F2] A smooth isotopy of embeddings is a smooth map whose slices are smooth embeddings; an ambient isotopy of $\mathbb R^3$ is a smooth family of diffeomorphisms with $H_0=\mathrm{id}$, and it is compactly supported when it fixes a compact set's complement ([[def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy]], [[def-smooth-embedding]]).

[L1] Under $\mathrm{AC}_\omega$ every smooth isotopy of a compact manifold into $\mathbb R^3$ extends to an ambient isotopy supported in any prescribed neighbourhood of the track ([[thm-isotopy-extension]], clause 4). [F2]

[L2] A proper injective immersion is a smooth embedding ([[prop-a-proper-injective-immersion-is-a-smooth-embedding]]); $S^1$ is compact ([[def-compact-space]]).

[A1] Countable choice is inherited from [L1]; the explicit affine family below selects nothing ([[def-countable-choice]]).

## Verification

**Proof technique:** direct.

1.1 An orthogonal $3\times3$ matrix $Q$ of determinant one has a unit fixed axis $a$: its eigenvalues have modulus one, the nonreal ones occur in conjugate pairs, and their product together with the real eigenvalues is one, so one real eigenvalue is $+1$. On $a^\perp$ its restriction is a plane rotation through some angle $\theta$. Fix an orthonormal basis of that plane and let $Q_t$ fix $a$ and rotate the plane through $t\theta$; its sine and cosine entries give a smooth path with $Q_0=I$, $Q_1=Q$. Define $F_t(x)=tc+((1-t)+t\lambda)Q_tf_0(x)$. Each slice is the restriction of an invertible affine map because $(1-t)+t\lambda>0$, hence is an embedding. The family is smooth and satisfies $F_0=f_0$, $F_1=f_1$. [F2, A1, construct, algebra]

2.1 By compactness of $S^1$, [L1] extends $F$ to an ambient isotopy supported in a compact subset of $W$, with $H_1\circ f_0=f_1$. Every affine parametrization of a round circle has the form $c+\lambda(u\cos s+v\sin s)$ for an ordered orthonormal pair $u,v$; completing it by $u\times v$ gives a matrix in $SO(3)$, including when the circle parameter orientation is reversed. Thus the construction covers all such round circles. The neighbourhood must contain the whole motion, since a disconnected neighbourhood of disjoint endpoint circles cannot support a motion between its components. [F1, L1, L2, step 1.1, construct]

3.1 Steps 1.1 and 2.1 exhibit the required compactly supported ambient isotopy carrying $f_0$ to $f_1$, verifying the hypothesis check of [[thm-isotopy-extension]] in this example. [step 1.1, step 2.1] ∎
