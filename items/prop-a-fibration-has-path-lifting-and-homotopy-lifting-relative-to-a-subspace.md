---
id: "prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace"
kind: "proposition"
title: "A fibration has path lifting and homotopy lifting relative to a subspace"
deps: ["def-hurewicz-and-serre-fibrations", "def-cofibration-and-homotopy-extension-property", "lem-pushouts-and-products-preserve-the-cofibrations-used-here", "lem-tube-lemma-for-a-compact-factor", "lem-interval-exponential-law-and-quotient-homotopies", "def-cw-complex-with-closure-finiteness-and-weak-topology", "def-skeleta-cw-subcomplex-and-relative-cw-complex", "def-axiom-of-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
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
verification:
  audited: 2026-09-12
---

## Statement

Both kinds of fibration lift every path with any prescribed initial point. For a Serre fibration, every homotopy on a CW complex $X$ lifts with a prescribed compatible lift on $X\times\{0\}\cup A\times I$, where $A$ is a CW subcomplex. This unrestricted CW clause assumes AC; finite CW pairs require no AC. Thus disk tests and CW tests are equivalent under AC. A Hurewicz fibration in CGWH has the same relative property for every closed cofibration pair $(X,A)$. This clause is choice-free. No assertion is made for arbitrary subspaces.

## Facts & Assumptions

[F1] HLP specifies the initial map and the projection of the entire lift. [[def-hurewicz-and-serre-fibrations]]

[F2] A closed cofibration has continuous NDR data $u:X\to I$, $h:X\times I\to X$ with $u^{-1}(0)=A$, $h_0=\mathrm{id}$, $h(a,s)=a$, and $h(x,1)\in A$ if $u(x)<1$; these are derived in proof steps 1.2–2.1 of the supplier. [[lem-pushouts-and-products-preserve-the-cofibrations-used-here]]

[F3] Compact-time tracks give uniform neighbourhood control. [[lem-tube-lemma-for-a-compact-factor]]

[F4] Transposition against $I$ preserves continuity, also with CG conventions. [[lem-interval-exponential-law-and-quotient-homotopies]]

[F5] CW spaces have the weak topology determined by characteristic disks. [[def-cw-complex-with-closure-finiteness-and-weak-topology]]

[F6] A subcomplex contains all boundaries of its cells. [[def-skeleta-cw-subcomplex-and-relative-cw-complex]]

[F7] AC selects lifts in arbitrary sets of nonempty lifting problems. [[def-axiom-of-choice]]

## Proof

**Given:** A map $p:E\to B$ of the indicated type and compatible continuous data $f:W\to E$, $g:X\times I\to B$, where $W=X\times\{0\}\cup A\times I$ and $pf=g|_W$.

1.1 Taking $X=D^0$ in F1 gives path lifting, including constant paths and any initial point that exists. If $X$ is empty the unique empty lift suffices. This does not assert that a lift of a constant path is constant. [F1]

1.2 Disk HLP also solves a disk-cylinder problem prescribed on its bottom and sides. Here is the geometric change of domain: $D^n\times\{0\}\cup S^{n-1}\times I$ is a boundary disk parametrized by $x\mapsto(2x,0)$ for $\|x\|\le1/2$ and $x\mapsto(x/\|x\|,2\|x\|-1)$ for $1/2\le\|x\|\le1$. This is a homeomorphism from $D^n$, with boundary the top rim. The complementary top disk has the same boundary parametrization. Parametrize the two hemispheres of a sphere by these two disks; the resulting boundary homeomorphism extends radially from an interior point to a homeomorphism of balls. Applying this construction both to the cylinder with its bottom face and to the cylinder with its bottom-and-sides gives a homeomorphism of these pairs. Thus F1 transfers to the required partial domain. For $n=0$ there are no sides and no change is needed. [F1, construct]

1.3 For the Hurewicz clause use F2 and put $Y=X\times I$. For $u(x)>0$ define $$T_s(x,t)=\bigl(h(x,s\min(t/u(x),1)),\ t-s\min(t,u(x))\bigr),$$ and for $u(x)=0$ set $T_s(x,t)=(x,t)$. Away from $u=0$ these are continuous formulas. At $a\in A$, F3 and $h(a,v)=a$ give, for any neighbourhood $O$ of $a$, a neighbourhood $V$ with $h(V\times I)\subseteq O$; the second coordinate changes by at most $u(x)$. Hence continuity holds across $u=0$, even at $t=0$. We have $T_0=\mathrm{id}$ and $T_s|_W=\mathrm{id}$. At $s=1$, either $t\le u(x)$ and the height is zero, or $t>u(x)$, whence $u(x)<1$ and $h(x,1)\in A$. Thus $r=T_1:Y\to W$ is a retraction. [F2, F3]

2.1 Induct over dimensions of the cells of $X$ outside $A$. On each characteristic disk the already prescribed data are exactly bottom-and-sides data; step 1.2 extends them. They agree on attaching boundaries, so descend to each skeleton. AC in F7 selects the extensions for unrestricted cell families, including the successive dimensions; a finite CW pair requires only finitely many choices. Continuity on all of $X\times I$ follows without assuming an ordinary infinite product/colimit interchange: transpose the constructed function to $X\to C_0(I,E)$. Its restriction to every characteristic disk is continuous by F4; F5 makes the transpose continuous, and F4 uncurries it. The initial and subcomplex values are unchanged at every stage. Taking $A=\varnothing$ proves the CW-test implication; conversely every disk is a CW complex. [F4, F5, F6, F7, step 1.2]

2.2 Put $w(x,t)=\min(u(x),t)$, whose zero set is $W$, and define $K:Y\times I\to Y$ by $K(y,v)=T_{1-\min(v/w(y),1)}(y)$ when $w(y)>0$, and $K(y,v)=y$ on $W$. F3 applied to the fixed tracks $T_s(z)=z$ proves continuity at $w=0$; elsewhere it is composition of continuous maps. In particular $K(y,0)=r(y)$, $K(y,w(y))=y$, and $K(z,v)=z$ for $z\in W$. [F3, step 1.3]

3.1 Apply ordinary HLP in the chosen category once, with parameter $Y$, initial map $fr$, and base homotopy $gK$. It supplies $L$ with $L(y,0)=f(r(y))$ and $pL(y,v)=gK(y,v)$. Then $\ell(y)=L(y,w(y))$ is continuous, $p\ell=g$, and $\ell(z)=L(z,0)=f(z)$ for $z\in W$. This proves the full prescribed relative lift. When $A=X$, $w=0$ and the construction returns $f$; when $A=\varnothing$ it still applies and ordinary HLP already suffices. The only selections here are one NDR witness and one HLP witness, not an indexed family, so no AC is used. In particular no regular lifting function is assumed. [F1, step 1.3, step 2.2] ∎
