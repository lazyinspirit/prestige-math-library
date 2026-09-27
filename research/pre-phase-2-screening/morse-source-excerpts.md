# Author source excerpts for the Morse Fredholm prerequisite candidate

URL: https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf

PDF SHA-256: f213f283987b78bdb116f346b6260be79407d2fb8051b89a4215764b752d3df6

Read scope: PDF pages 7–8 and 44–45 only; no full-paper reading claimed.

## PDF page 7

MORSE COMPLEX FOR INFINITE-DIMENSIONAL MANIFOLDS
43
(ii) The kernel of F+
A is
ker F+
A = {XA(t)ξ | ξ ∈Ws
A},
so if Q ∈L(E) is a projector onto Ws
A, the linear map
E →ker F+
A,
ξ 7→XA(·)Qξ,
is a left inverse of the evaluation at 0,
ker F+
A →E,
u 7→u(0).
□
REMARK 1.7.
If P is a projector onto Ws
A, it can be shown that
R+
Av(t) =
Z +∞
0
XA(t)1R+(t −τ)P −1R−(t −τ)(I −P)XA(τ)−1v(τ) dτ
deﬁnes a right inverse of F+
A. See Abbondandolo and Majer (2003c) for a more
extensive discussion of the topics of this section.
We conclude this section by establishing some properties of the operator d/dt−
A(t) on the whole real line.
PROPOSITION 1.8. Assume that A ∈C0R, L(E) has hyperbolic asymptotic
operators A(−∞) and A(+∞), both with ﬁnite-dimensional positive eigenspace.
Then the bounded linear operator
FA:C1
0(R, E) →C0
0(R, E),
u 7→u′ −Au,
is Fredholm of index
ind FA = dim EuA(−∞) −dim EuA(+∞).
Moreover, Wu
A + Ws
A is closed and
ker FA  Wu
A ∩Ws
A,
coker FA  E/(Wu
A + Ws
A).
(9)
Proof. Since Wu
A  EuA(−∞) and Ws
A  EsA(+∞), the ﬁrst space is ﬁnite-
dimensional and the second one is ﬁnite-codimensional, with
dim Wu
A = dim EuA(−∞),
codim Ws
A = dim EuA(+∞).
(10)
Therefore, Wu
A + Ws
A is (closed and) ﬁnite-codimensional, and
dim Wu
A ∩Ws
A −codim(Wu
A + Ws
A) = dim Wu
A −codim Ws
A.
(11)


## PDF page 8

44
A. ABBONDANDOLO AND P. MAJER
The kernel of FA is the linear subspace
ker FA = {XA(t)ξ | ξ ∈Wu
A ∩Ws
A},
so
dim ker FA = dim Wu
A ∩Ws
A.
(12)
By Proposition 1.6(i), the operators
F+
A:C1
0([0, +∞[, E) →C0
0([0, +∞[, E),
u 7→u′ −Au,
F−
A:C1
0(]−∞, 0], E) →C0
0(]−∞, 0], E),
u 7→u′ −Au,
have right inverses R+
A and R−
A. If v is an element of C0
0(R, E), any solution of
u′ −Au = v has the form
u(t) = XA(t)u(0) −R+
Av(0) + R+
Av(t),
∀t ≥0,
u(t) = XA(t)u(0) −R−
Av(0) + R−
Av(t),
∀t ≤0.
Such a curve u belongs to C1
0(R, E) if and only if u(0) −R+
Av(0) ∈Ws
A and u(0) −
R−
Av(0) ∈Wu
A. Therefore, v belongs to the range of FA if and only if the aﬃne
subspaces R+
Av(0) + Ws
A and R−
Av(0) + Wu
A have nonempty intersection, that is if
and only if R+
Av(0) −R−
Av(0) belongs to Ws
A + Wu
A. So the range of FA is the linear
subspace
ran FA = v ∈C0
0(R, E)
 R+
Av(0) −R−
Av(0) ∈Wu
A + Ws
A
	.
Such a linear subspace is closed. By the second assertion in Proposition 1.6(i), the
operator
C0
0(R, E) →
E
Wu
A + Ws
A
,
v 7→[R+
Av(0) −R−
Av(0)],
is onto, so
codim ran FA = codim(Wu
A + Ws
A).
(13)
All the statements follow from (10) – (13).
□
1.3.
MORSE VECTOR FIELDS
Let M be a Banach manifold of class C2, i.e., a paracompact Hausdorﬀtopolog-
ical space, locally homeomorphic to a Banach space E, endowed with an atlas
whose transition maps are of class C2. See Lang (1999) for foundational results
on Banach manifolds. A C1 tangent vector ﬁeld X on M deﬁnes a local ﬂow φ
solving
∂tφ(t, p) = Xφ(t, p), φ(0, p) = p,
∀p ∈M, −∞≤t−(p) < t < t+(p) ≤+∞,


## PDF page 44

80
A. ABBONDANDOLO AND P. MAJER
there Ch functions can always be Ch-approximated by smooth ones, while such an
approximation may not be possible on an inﬁnite-dimensional Hilbert space (see
for instance Nemirovski˘ı and Semenov, 1973 and Lasry and Lions, 1986). Notice
that C2 regularity of f is enough to get the Morse – Smale property up to order 1,
which is just what we need in order to have the Morse complex and to represent it
by intersection numbers.
The possibility of having a function θ which vanishes on some regions where
the intersections are already transversal and which can be very small elsewhere
will be useful in Section 2.13.
Let us set up the proof of Theorem 2.20. Fix two critical points x , y in
{a < f < b} with m(x) −m(y) ≤h, and consider the space of curves
C = C(x, y) :=
n
u ∈C1(R, N)
 lim
t→−∞u(t) = x, lim
t→+∞u(t) = y, lim
t→±∞u′(t) = 0
o
.
The space C is a smooth Banach manifold, being an open subset of an aﬃne
Banach space modeled on C1
0(R, H) (the spaces Ch
0 are deﬁned in Section 1.2).
Therefore, TuC = C1
0(R, H). The map
Ψ: C × K1 →C0
0(R, H),
(u, K) 7→u′ + ∇g+k f(u) = u′ + (G + K)−1(u)∇f(u),
is of class Ch, and its zeroes are the pairs (u, K) such that u is a negative gradient
ﬂow line of f with respect to the metric g+k, going from x to y. Set Z := Ψ−1({0}).
The following two lemmas describe some properties of the diﬀerential of Ψ with
respect to the ﬁrst, respectively the second variable.
LEMMA 2.21. Let (u, K) ∈Z. Then:
(i) the operator D1Ψ(u, K): TuC →C0
0(R, H) is Fredholm of index m(x)−m(y);
(ii) the operator D1Ψ(u, K) is onto if and only if the unstable manifold of x and
the stable manifold of y with respect to the vector ﬁeld −∇g+k f intersect
transversally at u(t) for some (hence all) t ∈R;
(iii) if w ∈C0
0(R, H) and a < b are real numbers, then there exists v ∈TuC such
that
D1Ψ(u, K)[v](t) = w(t)
∀t ∈]−∞, a] ∪[b, +∞[.
Proof. The diﬀerential of Ψ with respect to the ﬁrst variable is of the form
D1Ψ(u, K):C1
0(R, H) →C0
0(R, H),
v 7→v′ −Av,
where A: R →L(H) is deﬁned by
A(t) := −(G + K)−1u(t)D2 fu(t) −D(G + K)−1)u(t)∇fu(t).


## PDF page 45

MORSE COMPLEX FOR INFINITE-DIMENSIONAL MANIFOLDS
81
Since u(t) converges to x, resp. to y, for t →−∞, resp. t →+∞, A(t) converges in
norm to the operators
A(−∞) = −(G + K)−1(x)D2 f(x) = −∇2
g+k f(x),
A(+∞) = −(G + K)−1(y)D2 f(y) = −∇2
g+k f(y),
which are hyperbolic, and have positive eigenspaces of dimension m(x) and m(y),
respectively. Then (i) follows from Proposition 1.8. Claim (ii) follows from the
second identity in (9) , and from the identities
Tu(0)Wu(x) = Wu
A,
Tu(0)Ws(y) = Ws
A.
As for claim (iii), up to a translation we may assume that a < 0 < b. Then the con-
clusion follows from Proposition 1.6(i), applied to A|[0,+∞] and to A|[−∞,0](−·). □
LEMMA 2.22. Let (u, K) ∈Z, and let a < b be real numbers such that θu(t) ,
0 for every t ∈[a, b]. Let w ∈Ch(R, H) be a curve with support in [a, b]. Then
there exists J ∈K such that D2Ψ(u, K)[J] = w.
Proof. The diﬀerential of Ψ with respect to the second variable is
D2Ψ(u, K)[J] = −(G + K)−1(u)J(u)(G + K)−1(u)∇f(u).
Since (u, K) ∈Z, the curve u is a ﬂow line of the vector ﬁeld −∇g+k f going from
x to y. In particular, u is a Ch+1 embedding of R into N, and ∇fg+k ◦u never
vanishes.
It is easy to ﬁnd a Ch curve J0: R →Sym(H) with support in [a, b] such
that for every t ∈R the symmetric operator J(t) has rank not exceeding 2, and
maps the nonzero vector (G + K)−1u(t)∇fu(t) = ∇g+k fu(t) into the vector
−(G + K)u(t)w(t). Indeed, one may write an explicit formula for J0 by noticing
that if ξ , 0 and η are two elements of H, the bounded linear operator on H
ζ 7→⟨ξ, ζ⟩
|ξ|2 η + ⟨η, ζ⟩
|ξ|2 ξ −⟨ξ, η⟩⟨ξ, ζ⟩
|ξ|4
ξ,
is self-adjoint, has rank not exceeding 2, vanishes when η = 0, maps ξ into η, and
depends smoothly on (ξ, η) ∈(H \ {0}) × H.
Since u is a Ch+1 embedding, given δ > 0 we can ﬁnd an open neighborhood
U of u(]a −δ, b + δ[) and a Ch+1 submersion τ: U →]a −δ, b + δ[ such that
τu(t) = t for every t ∈]a −δ, b + δ[. Since θ is positive on u([a, b]), up to
choosing a smaller δ and a smaller U we may assume that infU θ > 0, and also that
τ has bounded derivatives up to order h + 1. If ψ ∈C∞
b (H, R) is a cut-oﬀfunction
with support in U and taking value 1 on u([a, b]), the Ch map J: N →Sym(H),
J(p) = ψ(p)J0
τ(p), belongs to K and has the required property.
□
The following lemma is the key point in the proof of Theorem 2.20.

