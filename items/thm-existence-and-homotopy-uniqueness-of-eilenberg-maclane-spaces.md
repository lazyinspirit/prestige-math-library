---
id: thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces
kind: theorem
title: Existence and homotopy uniqueness of Eilenberg--Mac Lane spaces
status: draft
origin: pipeline
deps: ["def-eilenberg-maclane-space", "thm-vanishing-of-the-primary-obstruction-is-equivalent-to-extension-over-the-next-skeleton", "thm-whitehead-theorem", "def-axiom-of-choice", "thm-seifert-van-kampen", "thm-relative-hurewicz-theorem", "lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis", "lem-high-relative-cells-do-not-change-lower-homotopy", "cor-homotopy-groups-of-a-cw-complex-depend-on-finite-skeleta-in-each-representative"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Theorem 7.20 and Corollaries 7.24 and 7.27, printed pages 178 and 182--184
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Lectures 13--14, Eilenberg--Mac Lane spaces and Lemma 14.1, printed pages 42--44
---

## Statement

Assume AC. Every group $G$ has a connected CW model $K(G,1)$. For every abelian group $A$ and every $n\geq2$, there is a connected CW model $K(A,n)$. If two models carry identifications with the same group, they are homotopy equivalent by maps inducing the prescribed identification (with the usual basepoint transport in degree one).

## Facts & Assumptions

[F1] Van Kampen computes the fundamental group of a presentation $2$-complex ([[thm-seifert-van-kampen]]).

[F2] For $n\geq2$, the wedge $\bigvee_{a\in A}S^n_a$ is $(n-1)$-connected and its $\pi_n$ is the free abelian group $\mathbb Z^{(A)}$ on the sphere inclusions ([[lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis]]).

[F3] Attaching cells of dimension $r+1$ does not change $\pi_i$ for $i<r$ ([[lem-high-relative-cells-do-not-change-lower-homotopy]]); relative Hurewicz and the exact sequence identify the selected attaching classes and kill the generated $\pi_r$ ([[thm-relative-hurewicz-theorem]]).

[F4] Every sphere map, disk map, or homotopy into a CW union has image in a finite subcomplex and hence occurs at a finite construction stage ([[cor-homotopy-groups-of-a-cw-complex-depend-on-finite-skeleta-in-each-representative]]).

[F5] A weak equivalence between CW complexes is a homotopy equivalence under AC ([[thm-whitehead-theorem]]).

[A1] AC selects simultaneous representatives, nullhomotopies, and attaching maps indexed by arbitrary sets ([[def-axiom-of-choice]]).

## Proof

**Given:** $G$, or $A$ and $n\geq2$, together with [A1].

1.1 For $G$, begin with a wedge $W$ of one oriented circle $x_g$ for every $g\in G$. Attach a $2$-cell along the word $x_gx_hx_{gh}^{-1}$ for every ordered pair $(g,h)$. By [F1], the resulting complex $Q_2$ has presentation [F1]

$$ \langle x_g\ (g\in G)\mid x_gx_h=x_{gh}\ (g,h\in G)\rangle. $$

Sending $x_g$ to $g$ defines a surjective homomorphism to $G$. Conversely $g\mapsto[x_g]$ is a homomorphism by the relations and is inverse to it; the relation with $g=h=1$ also forces $x_1=1$. Thus $\pi_1(Q_2)\cong G$. [F1]

1.2 Now let $n\geq2$. Put $W=\bigvee_{a\in A}S^n_a$. By [F2], $\pi_n(W)=\mathbb Z^{(A)}$. Let $\epsilon:\mathbb Z^{(A)}\to A$ send the basis vector $e_a$ to $a$. Choose a sphere representative for every element of $\ker\epsilon$ and attach an $(n+1)$-cell along it, obtaining $Q_{n+1}$. The pair $(Q_{n+1},W)$ is $n$-connected and $W$ is simply connected. Relative Hurewicz identifies its relative $\pi_{n+1}$ with the free relative cell group, and the boundary map sends each cell generator to its attaching class. Exactness therefore gives [A1, F2, F3]

$$ \pi_n(Q_{n+1})\cong\mathbb Z^{(A)}/\ker\epsilon\cong A. $$

No lower positive homotopy group appears by [F3]. [A1, F2, F3]

2.1 Starting from the degree-one presentation in Step 1.1, inductively choose one based map $S^r\to Q_r$ representing every element of $\pi_r(Q_r)$ and attach an $(r+1)$-cell along each, for $r\geq2$. The relative exact sequence makes $\pi_r(Q_r)\to\pi_r(Q_{r+1})$ zero and surjective, hence $\pi_r(Q_{r+1})=0$, while [F3] preserves all lower groups. Put $Q=\bigcup_{r\geq2}Q_r$. For fixed $i>1$, later cells do not recreate $\pi_i$. By [F4], every representative and nullhomotopy in $Q$ occurs at a finite stage; consequently $\pi_1(Q)=G$ and $\pi_i(Q)=0$ for $i>1$. Thus $Q$ is a $K(G,1)$. [A1, F3, F4, step 1.1]

3.1 Starting from the degree-$n$ complex in Step 1.2, attach one $(r+1)$-cell along a representative of every element of $\pi_r$ at the current stage, beginning with $r=n+1$. The argument of Step 2.1, now preserving $\pi_n=A$, kills each higher group successively. The increasing union $Q$ has $\pi_n(Q)=A$ and every other positive homotopy group zero by [F4]. This is a $K(A,n)$. [A1, F3, F4, step 1.2, step 2.1]

3.2 Let $K$ be any other degree-one model with the same identified group. From the completed model in Step 2.1, map each circle $x_g$ to a based loop representing the corresponding $g\in\pi_1(K)$. Each multiplication relator maps to a nullhomotopic loop, so choose fillings of the $2$-cells. Every higher attaching sphere maps trivially because $\pi_r(K)=0$ for $r>1$, and induction extends the map to $u:Q\to K$. It induces the prescribed isomorphism on $\pi_1$. [A1, F1, step 2.1]

4.1 For a degree-$n$ model $K$, begin with the completed model in Step 3.1 and map the sphere indexed by $a$ to a representative of the corresponding element of $\pi_n(K)$. Every attaching map indexed by $\ker\epsilon$ becomes nullhomotopic, so the map extends over the $(n+1)$-cells. All later attaching maps extend because the corresponding higher homotopy groups of $K$ vanish. The resulting $u:Q\to K$ induces the prescribed isomorphism on $\pi_n$. [A1, step 3.1]

5.1 In either case, $Q$ and $K$ are connected, $u$ is an isomorphism on their sole possibly nonzero positive homotopy group, and all their other positive homotopy groups vanish. Thus $u$ is a weak equivalence. By [F5], it is a homotopy equivalence. Applying Steps 3.2 and 4.1 to two models gives a zigzag of homotopy equivalences through $Q$; choosing a homotopy inverse for one leg gives a homotopy equivalence between the models. Its induced group map is the prescribed identification, with the basepoint track supplying the standard conjugacy transport when $n=1$. [A1, F5, step 3.2, step 4.1]

6.1 The construction also covers the trivial group. In that case the resulting connected CW complex has every positive homotopy group zero, and its map to a point is a weak equivalence, hence a homotopy equivalence by [F5]. No countability, finite generation, or finite-dimensionality has been assumed. Every infinite selection is accounted for by [A1], while the passage to the union uses the individual compact-support statement [F4], not an unproved interchange of homotopy groups with an arbitrary colimit. $\square$ [A1, F4, F5, step 2.1, step 3.1, step 5.1]
