---
id: thm-stable-clifford-hopf-decomposition-over-sphere-bundles
kind: theorem
title: "Stable Clifford–Hopf decomposition over sphere bundles"
status: draft
origin: session
deps: ["def-axiom-of-choice", "cor-finite-cw-real-vector-bundle-has-orthogonal-complement-under-ac", "thm-affine-clifford-hopf-maps-are-highly-connected", "lem-iterated-suspension-and-winding-control-for-clifford-families", "lem-volume-chirality-and-clifford-hopf-clutching", "thm-homotopy-invariance-of-vector-bundle-pullback"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Eschenburg–Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory (2021), expanded local argument"
      url: "https://arxiv.org/pdf/2011.14368v3"
---

## Statement

Assume AC. Let $X$ be a finite CW complex and $V\to X$ oriented Euclidean of rank $n=4m>0$. Put $\widehat V=S(\mathbb R\oplus V)$, with projection $\pi$ and pole sections $s_\pm$. For an ungraded $C(V)$-module bundle $\Lambda$, let $H(\Lambda)$ be the clutching bundle with upper and lower halves the volume eigenspaces $\Lambda^\pm$ and transition $c(v):\Lambda^+\to\Lambda^-$ along $S(V)$. Every real bundle on $\widehat V$ becomes $\pi^*E_0\oplus H(\Lambda)$ after addition of finitely many trivial real bundles and copies of $H(C(V))$, where the regular module uses volume chirality. The proof also gives relative extension of an affine splitting and its lower-disk gauge over any finite CW subcomplex, in the dimension-dependent range stated below.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed; it implies the countable-choice assumptions in the differential-geometric suppliers. No stronger choice principle is introduced. ([[def-axiom-of-choice]]).

[F1] Every real bundle over a finite CW base embeds in a finite trivial bundle and has an orthogonal complement. ([[cor-finite-cw-real-vector-bundle-has-orthogonal-complement-under-ac]]).

[F2] For a positive $C_{n-1}$ representation, the affine Hopf inclusion is $d$-connected when $p\ge p_0(d,n-1)$ and $s_{n-1}d\le\eta\le p/4$; stable winding is invariant under the gauge and oriented frame changes used in local trivializations. ([[thm-affine-clifford-hopf-maps-are-highly-connected]], [[lem-iterated-suspension-and-winding-control-for-clifford-families]]).

[F3] The volume operator of an oriented rank-$4m$ Clifford bundle is an involution; odd multiplication interchanges its eigenspaces, and these glue the Hopf bundle. For an ungraded module, give it the canonical grading $\Gamma=\omega$ to apply this algebraic and clutching assertion. ([[lem-volume-chirality-and-clifford-hopf-clutching]]).

[F4] Homotopic pullbacks of a real vector bundle are isomorphic; this identifies a bundle on a disk half with the pullback of its pole restriction. ([[thm-homotopy-invariance-of-vector-bundle-pullback]]).

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 Represent the bundle by a triple $(E_+,\sigma,E_-)$ over the two disk halves, using [F4]. The volume $\omega=c(e_1)\cdots c(e_n)$ is global because $V$ is oriented. For an ungraded module it defines the canonical grading, so [F3] applies without changing the ungraded module category. On its upper half the even generators $-c(e_1)c(e_{j+1})$ form a positive $C_{n-1}$ family, by multiplying their Clifford relations and using $\omega=I$ there. Locally normalize $\sigma$ at a chosen $v_0=e_1$ by $\sigma(v_0)^{-1}\sigma(v)$. The determinant is $+1$ because the sphere is connected and its normalized value at $v_0$ is $I$. Its stable winding $\eta$ is constant on each connected component of $X$ and independent of these charts by [F2]. [F2, F3, F4, construct]

2.1 One regular Hopf summand has upper rank $h=2^{n-1}$ and positive winding $h/2$. Add finitely many to make $\eta\ge s_{n-1}(\dim X+1)$. Add trivial real summands to make $p\ge4\eta$ and satisfy the finite size inequalities in [F2]. Next embed $E_+$ into the positive half $R^+$ of a sufficiently large regular module $R=C(V)^N$: [F1] embeds it into a trivial bundle, while each regular positive half contains the global nonzero vector $(1+\omega)/2$, so enough copies contain that trivial bundle. Add the pulled-back complement $F=R^+\ominus E_+$ to the triple. This only increases $p$ and leaves $\eta$ fixed. Enlarge $N$ so the size inequalities still hold, with $p$ now divisible by $s_{n-1}$. At the end add an ordinary complement of $F$ to turn this additional stabilization into a trivial real stabilization. [F1, F2, F3, step 1.1, construct]

3.1 We prove the relative statement with $E_+=R^+$. Suppose over a subcomplex $X'$ we already have an orthogonal module splitting $R=R_0\oplus R_1$ and an isometry $f:E_-|_{D(V|_{X'})}\to R_0^+\oplus R_1^-$ such that $f\sigma=\alpha$, where $\alpha(v)=I_{R_0^+}\oplus c(v)|_{R_1^+}$. Attach one cell $D$. Trivialize $V$ and $R$ compatibly on its characteristic disk, so $R^+$ becomes a fixed positive representation space. Normalize the source lower trivialization by $\sigma(v_0)^{-1}$ and the target boundary lower trivialization by $\alpha(v_0)^{-1}$. In these coordinates
$$\widehat f=\alpha(v_0)^{-1}f\sigma(v_0),\quad \widehat\sigma(v)=\sigma(v_0)^{-1}\sigma(v),\quad \widehat\alpha(v)=\alpha(v_0)^{-1}\alpha(v).$$
On $\partial D\times D^n$, $\widehat f(x,v_0)=I$, and on $\partial D\times S^{n-1}$, $\widehat f\widehat\sigma=\widehat\alpha$, which is affine Hopf. [F2, F3, step 2.1, construct]

4.1 The boundary lower gauge has the explicit extension
$$\widehat F(rx,v)=\widehat f(x,v_0+r(v-v_0)),\qquad \widehat F(0,v)=I.$$
Here $x\in\partial D$, $0<r\le1$, and $v\in D^n$. Compactness and $\widehat f(x,v_0)=I$ give continuity at $r=0$ uniformly in $x,v$. It equals $\widehat f$ on the cell boundary and equals $I$ on $D\times\{v_0\}$. Thus $\tau=\widehat F\widehat\sigma$ is a based sphere-map family over $D$, affine on its boundary. Since each $\widehat F$ sphere map extends over the disk, it is nullhomotopic and leaves winding unchanged. Apply [F2] relatively to $\partial D$ to obtain $\tau_t$, with $\tau_0=\tau$ and $\tau_1$ affine. Its recovered invariant projection extends the given splitting. Set $R_1^-=c(v_0)R_1^+$ and similarly for $R_0$. Invariance under the even Clifford algebra and odd multiplication makes $R_0,R_1$ full ungraded submodules. [F2, F3, step 3.1, construct]

5.1 An equatorial gauge alone is insufficient. Put $q_t=\tau_t\tau_0^{-1}$. It has $q_0=I$ and is $I$ over $\partial D$ for every $t$. Cone it over the lower disk:
$$Q(x,rv)=q_r(x,v)\quad(r>0),\qquad Q(x,0)=I.$$
Uniform continuity at $r=0$ proves continuity; it is $I$ on $\partial D\times D^n$. Therefore $G=Q\widehat F$ extends the normalized lower gauge and satisfies $G\widehat\sigma=\tau_1$ on the equator. With the final normalization $\Theta_1=\alpha_1(v_0)^{-1}$, the actual lower gauge is $\Theta_1^{-1}G\sigma(v_0)^{-1}$. On the cell boundary it equals the old $f$. Thus this is a genuine isomorphism over both disk halves with upper gauge $I$, not merely an equatorial identity. [step 3.1, step 4.1, construct, algebra]

6.1 Induct over the finitely many cells, starting with empty relative data for existence. The splittings and lower gauges agree along the attaching maps by steps 4.1–5.1. We obtain $R=R_0\oplus R_1$ and a triple isomorphism to $\pi^*R_0^+\oplus H(R_1)$. The earlier regular and trivial shifts give exactly the claimed stable decomposition. The same induction works relative to any given subcomplex with affine splitting and lower gauge; use connectivity at least the relative cell dimension. All ranks, winding labels, and size inequalities were arranged before induction and remain unchanged during it. [F1, F2, step 2.1, step 3.1, step 4.1, step 5.1, construct] ∎

## Integration note

The algebraic use of the current graded volume lemma is legitimate after the canonical choice $\Gamma=\omega$; it does not identify raw graded-module Grothendieck groups with ungraded groups. Ordinary bundle pullback homotopy invariance and complement suppliers must retain their exact real-bundle hypotheses. No KO exactness or periodicity is used in this geometric theorem.
