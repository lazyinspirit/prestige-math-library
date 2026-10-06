---
id: ex-continuation-across-a-birth-death-adds-an-acyclic-pair
kind: example
title: "Continuation across a birth--death pair adds an acyclic summand"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps:
  - def-axiom-of-choice
  - cor-morse-homology-recovers-the-morse-inequalities
  - def-canonical-morse-homology-of-a-closed-manifold
  - def-continuation-chain-map
  - def-mod-two-morse-differential
  - def-morse-function-and-excellent-morse-function
  - def-morse-homology-of-a-morse-smale-pair
  - def-morse-smale-pair
  - def-nondegenerate-critical-point-nullity-index-and-coindex
  - def-signed-morse-differential-over-the-integers
  - lem-unstable-orientations-induce-trajectory-moduli-orientations
  - thm-continuation-count-is-a-chain-map
  - thm-reverse-continuation-is-an-inverse-on-morse-homology
justified_by: []
dependency_level: 16
proof_strategy: direct
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.1.c (worked examples of small complexes) and Remark 3.4.1 with Figure 3.8 (birth/death of a pair of critical points during an interpolation), printed pp. 57-60 and 71-72, PDF pp. 67-70 and 81-82"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 20, Sec. 6.3 (1) and Lecture 21, Sec. 7.3: the Morse-inequality bookkeeping of extra critical pairs and their cancellation, PDF pp. 91-92 and 97-98"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a closed
manifold and fix Morse--Smale pairs $(f^-,g^-)$ and $(f^+,g^+)$ related by a
birth--death pair satisfying the isolated-trajectory hypothesis below: while $f^-$ has no critical points in an open set
$U\subset M$, the function $f^+$ has in $U$ exactly two critical points $b$ of
index $k$ and $c$ of index $k+1$; among the index-one trajectories of $f^+$
involving the new critical points, the only one is a single trajectory from
$c$ to $b$, and all other critical points and index-one trajectories
coincide with those of $f^-$; in the integral case choose orientations (positive rays in the critical orientation lines) at all critical points, compatible
on the unchanged unstable manifolds
([[def-morse-function-and-excellent-morse-function]],
[[def-nondegenerate-critical-point-nullity-index-and-coindex]],
[[def-morse-smale-pair]]).

Then the Morse complex of $f^+$ splits as a direct sum of the complex of
$f^-$ and the two-term complex
$$\Lambda\cdot c\xrightarrow{\ \pm1\ }\Lambda\cdot b,\qquad \deg c=k+1,\ \deg b=k,$$
with unit differential $\partial^+c=\pm b$ on the new generators and
$\partial^+b=0$ ([[def-mod-two-morse-differential]],
[[def-signed-morse-differential-over-the-integers]]); this summand is acyclic,
so adding it does not change homology. Any regular continuation datum from
$(f^-,g^-)$ to $(f^+,g^+)$ adapted to this local model
([[def-continuation-chain-map]]) is a chain map that is an isomorphism on
homology by [[thm-reverse-continuation-is-an-inverse-on-morse-homology]], and
consequently the birth--death pair adds $t^k+t^{k+1}=t^k(1+t)$ to the Morse
polynomial $c(t)$ of
[[cor-morse-homology-recovers-the-morse-inequalities]], equivalently it adds
$t^k$ to the correction polynomial $Q(t)$ there
([[def-morse-homology-of-a-morse-smale-pair]],
[[def-canonical-morse-homology-of-a-closed-manifold]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, a closed manifold $M$ and Morse functions $f^-,f^+$ related by the local birth--death model described above, with the new critical points $b$ of index $k$ and $c$ of index $k+1$ and the single new index-one trajectory from $c$ to $b$.

[F1] The Morse complex of a Morse--Smale pair is free on the critical points with the trajectory differentials; the coefficient of a generator in the differential counts the index-one trajectories with the orientation signs ([[def-mod-two-morse-differential]], [[def-signed-morse-differential-over-the-integers]], [[def-morse-homology-of-a-morse-smale-pair]]).

[F2] Under the stated local model, the differential of $f^+$ has $\partial^+c=\pm b$ (one trajectory, unit coefficient) and $\partial^+b=0$ (no index-one trajectory from $b$); all other structure maps agree with those of $f^-$, so the Morse complex of $f^+$ is the direct sum of the complex of $f^-$ and the two-term complex $\Lambda c\to\Lambda b$ ([[def-nondegenerate-critical-point-nullity-index-and-coindex]], [[def-morse-function-and-excellent-morse-function]]).

[F3] The two-term complex $\Lambda c\xrightarrow{\pm1}\Lambda b$ is acyclic: the kernel of the map in degree $k+1$ is zero, and its image in degree $k$ is all of $\Lambda b$, in both coefficient cases. Adding an acyclic direct summand does not change homology ([[def-morse-homology-of-a-morse-smale-pair]]).

[F4] A regular continuation datum between the two pairs is a chain map inducing an isomorphism on homology, with inverse the reverse continuation ([[thm-continuation-count-is-a-chain-map]], [[thm-reverse-continuation-is-an-inverse-on-morse-homology]]).

[F5] The correction polynomial $Q$ of [[cor-morse-homology-recovers-the-morse-inequalities]] has coefficients $r_{j+1}$, the rank of the differential in degree $j+1$, and the Morse numbers $c_j$ are the numbers of critical points of index $j$.

## Verification

**Proof technique:** direct.

1.1 By [F2] the differential of $f^+$ is $\partial^+c=\pm b$ and $\partial^+b=0$ on the new generators, with all other coefficients as in the differential of $f^-$; hence the Morse complex of $f^+$ is the direct sum of the Morse complex of $f^-$ and the two-term complex $\Lambda c\xrightarrow{\pm1}\Lambda b$. [F1, F2, given]

2.1 By [F3] the new summand is acyclic in both coefficient cases: $H_{k+1}=\ker(\pm1)=0$ and $H_k=\Lambda b/\operatorname{im}(\pm1)=0$; therefore the homology of the Morse complex of $f^+$ equals the homology of the complex of $f^-$, so the birth--death pair does not change the Morse homology. [F3, step 1.1]

3.1 By [F4] the continuation map is a chain map and an isomorphism on homology; this is consistent with step 2.1 and shows that the continuation across the birth--death pair adds the two new generators without changing the homology. [F4, step 2.1]

4.1 For the polynomial bookkeeping: by [F5] the number of generators in degrees $k$ and $k+1$ each increases by one, while the only differential of changed rank is $\partial^+_{k+1}$, whose rank increases by one; hence the Morse polynomial satisfies $c^+(t)=c^-(t)+t^k+t^{k+1}$ and the correction polynomial satisfies $Q^+(t)=Q^-(t)+t^k$, which is exactly the addition of $t^k(1+t)=(1+t)t^k$ to the decomposition $c(t)=b(t)+(1+t)Q(t)$. [F5, step 2.1, algebra] ∎


## A circle birth after changing bases

The isolated-trajectory hypothesis above is a sufficient condition for a direct sum in the critical-point basis; it is not the geometry of a birth on the connected circle. A genuine circle birth changes one maximum and one minimum to two of each. Enumerate the latter in circular order as $p,q_1,c,q_2$, with $p,c$ maxima. Orient the two unstable intervals by increasing angle. Their outgoing arcs have opposite comparison signs, giving $\partial p=q_1-q_2$ and $\partial c=q_2-q_1$. In the integral bases $P=p+c$, $C=c$, $Q=q_1$, $B=q_2-q_1$, one has $\partial P=0$ and $\partial C=B$. Both changes of basis are unimodular, so they work over $\mathbb Z$ and $\mathbb Z/2$. The homotopy $B\mapsto C$ contracts the new pair; the remaining complex on $P,Q$ is the zero-differential complex of the minimal circle function. Thus the same homology and polynomial conclusions hold, with $c^-=1+t$, $c^+=2+2t$, and $Q^+=Q^-+1$, although the direct sum appears only after this change of basis. A regular continuation map realizes the homology isomorphism by the general continuation theorem.
