---
id: "ex-mobius-band-as-an-interval-bundle-with-monodromy"
kind: "example"
title: "Mobius band as an interval bundle with monodromy"
deps: ["def-locally-trivial-fiber-bundle", "def-fiber-transport-and-monodromy-action", "thm-quotient-universal-property", "thm-numerable-fiber-bundles-are-hurewicz-fibrations", "prop-fibers-over-one-path-component-are-fiber-homotopy-equivalent", "thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology", "cor-homotopic-maps-induce-the-same-map-on-singular-homology", "lem-continuity-is-local-and-pastes", "def-axiom-of-choice", "lem-open-quotient-arcs-in-real-line-mod-integers", "thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle", "thm-sine-and-cosine-subtraction-formulas", "cor-trigonometric-parity-and-pythagorean-identity", "thm-sine-cosine-zero-sets-and-fundamental-period", "thm-quarter-turn-values-and-shift-formulas", "lem-algebra-of-continuous-real-maps-on-a-space"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter7 pp49–56; Chapter9 §3 p66 and §5 pp68–69"
    - title: "Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem4.41 pp375–377; Hopf example pp377–378; §4.3 pp405–410"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

The quotient $M=([0,1]\times[-1,1])/((0,u)\sim(1,-u))$ projects to $S^1=\mathbb R/\mathbb Z$ by $[t,u]\mapsto[t]$ and is a locally trivial interval bundle. A circuit represented by $s\mapsto[s]$ has the chartwise transport $u\mapsto-u$. This visible reversal induces the identity on interval homology; at the central basepoint zero all positive homotopy groups are zero. We assume AC only to infer Hurewicz HLP from the supplied numerable bundle, so that its homotopy-class transport has the preceding formal monodromy interpretation.

## Facts & Assumptions

[F1] Ordinary bundle charts and closed-support partitions define numerable bundles. [[def-locally-trivial-fiber-bundle]]

[F2] Fiber transport gives homology monodromy with moving-basepoint qualifications on homotopy groups. [[def-fiber-transport-and-monodromy-action]]

[F3] Quotient-constant continuous maps descend continuously. [[thm-quotient-universal-property]]

[F4] Numerable bundles have Hurewicz HLP under AC. [[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]

[F5] Homotopic transport families give the same endpoint homotopy class; arbitrary lifts need not be regular. [[prop-fibers-over-one-path-component-are-fiber-homotopy-equivalent]]

[F6] Homotopy equivalences induce homology isomorphisms, using homotopy invariance. [[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]

[F7] Finite closed pasting and local continuity give continuous maps. [[lem-continuity-is-local-and-pastes]]

[F8] The circle quotient is open and short arcs have continuous inverse representatives. [[lem-open-quotient-arcs-in-real-line-mod-integers]]

[F9] The circle identification $[t]\mapsto e^{2\pi it}$ is a homeomorphism. [[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]

[F10] The subtraction formulas express the sine and cosine of a difference. [[thm-sine-and-cosine-subtraction-formulas]]

[F11] The sine zero set is $\pi\mathbb Z$, and sine and cosine are $2\pi$-periodic. [[thm-sine-cosine-zero-sets-and-fundamental-period]]

[F12] Finite maxima, sums and quotients with positive denominator are continuous. [[lem-algebra-of-continuous-real-maps-on-a-space]]

[F13] The Pythagorean identity gives $\cos^2 u+\sin^2 u=1$ for every real $u$. [[cor-trigonometric-parity-and-pythagorean-identity]]

[F14] The shift identity is $\cos(u+\pi)=-\cos u$, with $\cos0=1$. [[thm-quarter-turn-values-and-shift-formulas]]

[F15] Homotopic maps induce the same map on singular homology. [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]

## Verification

**Given:** The quotient $M$, interval $J=[-1,1]$, and base coordinate $[t]\in\mathbb R/\mathbb Z$.

1.1 The projection descends by F3 since its two identified boundary values agree. Over $U_1=S^1\setminus\{[0]\}$ use the representative $0<t<1$ and coordinate $u$; inverse representatives are locally continuous by F8, hence continuous by F7. The same local argument applies to the second chart. Over $U_0=S^1\setminus\{[1/2]\}$ use $-1/2<\tau<1/2$ with inverse chart $(\tau,u)\mapsto[\tau,u]$ for $\tau\ge0$ and $[1+\tau,-u]$ for $\tau\le0$. The formulas agree at zero by the quotient relation and are continuous by F7. The inverse coordinate on the two prequotient neighbourhoods of the seam is respectively $u$ and $-u$, continuous on their disjoint open pieces; F3 descends it. Restriction of a quotient to the inverse image of an open target is quotient, because open sets there are ambient open and the quotient criterion applies. Thus these are genuine inverse homeomorphisms. On one overlap component the fiber transition is identity and on the other it is $u\mapsto-u$. [F1, F3, F7, F8]

1.2 We first verify locally the fibre clause behind F9. Equality of $(\cos2\pi s,\sin2\pi s)$ and $(\cos2\pi t,\sin2\pi t)$ gives $\sin(2\pi(s-t))=0$ and $\cos(2\pi(s-t))=1$ by F10 and F13. F11 then gives $2\pi(s-t)=m\pi$. F14 gives $\cos((m+1)\pi)=-\cos(m\pi)$ and $\cos0=1$, so integer induction in both directions gives $\cos(m\pi)=(-1)^m$. Since the difference cosine is one, $m$ is even and $s-t\in\mathbb Z$; the converse is F11's $2\pi$-periodicity. Thus the values agree exactly on the quotient fibres, independently verifying the affected injectivity input to F9. Now write $c([t])=\cos(2\pi t)$, a well-defined continuous circle coordinate by F9; F12 makes the following arithmetic operations continuous. The functions $f_0=\max(0,c+1/2)$ and $f_1=\max(0,1/2-c)$ have positive sum, so $\rho_i=f_i/(f_0+f_1)$ form a finite partition. Their supports lie respectively in $\{c\ge-1/2\}\subset U_0$ and $\{c\le1/2\}\subset U_1$. In particular they avoid the missing chart points even at support boundaries. This supplies the F1 numerating data, and F4 applies under the stated AC. [F1, F4, F9, F10, F11, F12, F13, F14]

2.1 For $u\in J$, the continuous lift of the circuit is $s\mapsto[s,u]$ in $M$. It begins at $[0,u]$ and ends at $[1,u]=[0,-u]$. The family is jointly continuous in $(u,s)$ by the quotient map, so it gives a transport map, not merely separately selected path lifts. F5 compares this family with any universal lifting function, showing that its endpoint map $R(u)=-u$ represents the F2 transport homotopy class. [F2, F3, F5, step 1.2]

3.1 The homotopy $K(u,r)=(1-2r)u$ stays in $J$, starts at the identity and ends at $R$, and fixes zero for every $r$. Therefore F15 makes $R_*$ the identity on every $H_q(J;G)$, for every abelian coefficient group $G$. The based contraction $C(u,r)=(1-r)u$ contracts every based cube in $(J,0)$ rel boundary, so all its positive homotopy groups vanish. The two endpoints $-1,1$ are exchanged by $R$ despite this trivial action on invariants. [F6, F15, step 2.1]

4.1 The interval and bundle fibers are nonempty; $u=0$ is fixed while $u=\pm1$ is interchanged. Both circuit endpoints and both homotopy endpoints have been computed. The bundle/chart and reversal calculations are choice-free; the only propagated AC is the invocation of F4 in step 1.2. Thus geometric reversal must not be advertised as nontrivial homology or based homotopy monodromy. [F4, step 1.1, step 1.2, step 2.1, step 3.1] ∎
