---
id: def-forks-noodles-and-their-lkb-intersection-pairing
kind: definition
title: Forks, noodles and the LKB intersection pairing
status: draft
origin: pipeline
deps: [def-lkb-relative-pairing-modules, def-lkb-absolute-second-homology-module, def-two-point-configuration-space-of-a-punctured-disk]
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Section 2, printed pp. 474-476: forks, noodles, the surfaces Sigma(F), Sigma(N), and the pairing <N,F>; section 2.2 for the sesquilinearity identities"
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Section 2.2, printed pp. 3-4: nu_epsilon, the relative modules and the two pairings, with sesquilinearity"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Definition

Let $D$, $P=\{p_1,\dots,p_n\}$ and $C$ be as in
[[def-two-point-configuration-space-of-a-punctured-disk]], with the chosen
boundary points $d_1,d_2$ of the lower arc, and let
$\widetilde C\to C$ be the LKB cover with its pairing modules
$H_2(\widetilde C,\tilde\nu)$ and $H_2(\widetilde C,\partial\widetilde
C\cup\tilde\nu)$ of [[def-lkb-relative-pairing-modules]].

**Noodles.** A **noodle** is an embedded edge $N\subset D$ with endpoints
$d_1,d_2$, whose interior lies in $D\setminus P$. Every noodle is oriented
from $d_1$ to $d_2$. Its **surface** is
$$\Sigma(N)=\{\{x,y\}\in C: x,y\in N,\ x\ne y\}\subset C,$$
oriented by the orientation of $N$ as in Bigelow 2001 section 2, and
$\widetilde\Sigma(N)$ denotes the lift of $\Sigma(N)$ containing $\tilde c_0$.
The proper triangle has a collision end along its omitted diagonal. Its
end-stable class is therefore
$$y_N=[\widetilde\Sigma(N)]\in H_2(\widetilde C,\partial\widetilde C\cup\tilde\nu),$$
not ordinary boundary-only homology. Parametrize $N$ by $I=[0,1]$ and truncate
to $0\le u<v\le1$, $v-u\ge\delta$. This compact triangle lifts from $c_0$;
its outer sides lie in $\partial\widetilde C$ and its third side lies in
$\tilde\nu_\varepsilon$ when $\delta$ is sufficiently small by uniform
continuity. Differences of smaller truncations lie in that collision end,
so the finite relative cycles define the compatible stabilized class.

**Forks.** A **fork** is an embedded tree $F\subset D$ with four vertices
$d_1,p_i,p_j,z$, such that $F\cap\partial D=\{d_1\}$, $F\cap P=\{p_i,p_j\}$,
and all three edges of $F$ have $z$ as a vertex. The edge containing $d_1$ is
the **handle** of $F$; the union of the other two edges is the **tine edge**
$T(F)$, an embedded edge from $p_i$ to $p_j$ through $z$. The tine edge is
oriented so that the handle lies to its right. A **parallel copy** of $F$ is a
parallel tree $F'$ whose handle starts at $d_2$, obtained by pushing the tine and handle of $F$ off themselves and then translating
the two tine endpoints through $P$ along the respective tine ends, as in
Bigelow 2001 Figure 1; write $z'$ for its trivalent vertex and $T(F')$ for its
tine edge. The **surface of the fork** is
$$\Sigma(F)=\{\{x,y\}\in C: x\in T(F)\setminus P,\ y\in T(F')\setminus P\} \subset C,$$
homeomorphic to the interior of the square $T(F)\times T(F')$ and oriented by
the two tine orientations. Let $\beta_1$ be the arc from $d_1$ to $z$ along
the handle of $F$ and $\beta_2$ the arc from $d_2$ to $z'$ along the handle of
$F'$, and let $\widetilde\beta$ be the lift of the arc $\{\beta_1,\beta_2\}$
in $C$ starting at $\tilde c_0$; the lifted surface $\widetilde\Sigma(F)$ is
the lift of $\Sigma(F)$ containing $\widetilde\beta(1)$. Thus a fork presents a
class $[\widetilde\Sigma(F)]\in H_2(\widetilde C,\tilde\nu)$; the closed
compact replacement of a multiple of this class is the subject of
[[lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement]].

**The LKB pairing.** For $x\in H_2(\widetilde C;\mathbb Z)$ and
$y\in H_2(\widetilde C,\partial\widetilde C\cup\tilde\nu)$ let $x\cdot y\in
\mathbb Z$ denote the algebraic intersection number of representatives in
general position, and let $q^at^b y$ denote the image of $y$ under the deck
transformation $q^at^b$. The **LKB pairing** is
$$\langle x,y\rangle=\sum_{a,b\in\mathbb Z}\bigl(x\cdot q^at^by\bigr)\, q^at^b\in\Lambda .$$
Interchanging the two variables with the two relative modules gives the
**primed pairing**
$$\langle\cdot,\cdot\rangle': H_2(\widetilde C,\tilde\nu)\times H_2(\widetilde C,\partial\widetilde C)\longrightarrow\Lambda,\qquad \langle x',y'\rangle'=\sum_{a,b\in\mathbb Z}\bigl(x'\cdot q^at^by'\bigr)\, q^at^b .$$
The geometric fork/noodle polynomial in finite transverse position is the
signed sum of its labelled deck intersections. For a closed absolute
replacement $c_F$ of $\Delta_F\widetilde\Sigma(F)$, with
$\Delta_F=(1-q)^2(1+qt)$, it satisfies
$$\langle c_F,y_N\rangle=\Delta_F\langle N,F\rangle.$$
This uses the absolute/end-stable pairing, not a generic pairing of two
end-relative modules. The finite diagram sum and this identity are verified in
[[lem-the-fork-noodle-pairing-is-well-defined-and-equivariant]]; the sum
displayed here is shown to be finite, independent of representatives and
$\Lambda$-sesquilinear in that item.

**Sesquilinearity.** For $x,y,x',y'$ in the appropriate modules and
$\lambda\in\Lambda$ one has
$$\langle\lambda x,y\rangle=\lambda\langle x,y\rangle =\langle x,\bar\lambda y\rangle,\qquad \langle\lambda x',y'\rangle'=\lambda\langle x',y'\rangle' =\langle x',\bar\lambda y'\rangle',$$
where $\bar\lambda(q,t)=\lambda(q^{-1},t^{-1})$; the second identity uses that
the intersection number is additive in each variable and that the deck action
on the second variable conjugates the coefficient. These identities are
verified in [[lem-the-fork-noodle-pairing-is-well-defined-and-equivariant]].

The relative modules occur in this page only as targets of the two pairings;
the representation itself lives on the absolute module
[[def-lkb-absolute-second-homology-module]].
