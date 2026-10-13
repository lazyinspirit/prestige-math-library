---
id: ex-gr-observer-velocity-expansion-numeric-check
kind: example
title: "An exact observer-relative energy and momentum computation at relative speed c/2, with the expansion bounds of the low-velocity lemma checked by exact rational comparison"
status: draft
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-minkowski-model-and-inertial-chart, def-gr-observer-and-rest-space, def-gr-observer-relative-energy-and-momentum, lem-gr-observer-projection-decomposition, lem-gr-observer-energy-momentum-identities, lem-gr-observer-relative-velocity-expansions, def-causal-classification-of-lorentz-vectors, def-rational-power]
dependency_roles:
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-observer-relative-energy-and-momentum: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  lem-gr-observer-energy-momentum-identities: mathematical-premise
  lem-gr-observer-relative-velocity-expansions: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-rational-power: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1: the low-velocity expansions E = m + (1/2)mv^2 and p = mv of the relativistic energy and momentum, printed p. 27 (PDF p. 34)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 1.2: the relativistic energy-momentum relation and its nonrelativistic limit, printed pp. 15-19 (PDF pp. 22-26)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 1.1: four-momentum, rest mass and the low-velocity reading of energy and momentum, printed pp. 5-8 (PDF pp. 6-9)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Example

Work on the flat model of [[def-gr-minkowski-model-and-inertial-chart]] with
inertial chart $x$ and let $c>0$ and $m>0$. At $p$ with $x(p)=0$ take the
observer $n:=\partial_0|_p$ and the tangent vector

$$P:=mc\,u,\qquad u:=\frac{2}{\sqrt3}\,\partial_0|_p+\frac{1}{\sqrt3}\,\partial_1|_p ,$$

so that $g_p(u,u)=-1$ and $P$ is future timelike with rest mass $m$
([[def-gr-observer-relative-energy-and-momentum]]). Then the observer data of
the low-velocity lemma are

$$h_n(u)=\frac{1}{\sqrt3}\,\partial_1|_p,\qquad \gamma=\frac{2}{\sqrt3},\qquad w=\frac c2\,\partial_1|_p,\qquad s=\frac c2,$$

and the exact energy and momentum are

$$E_n(P)=\frac{2mc^2}{\sqrt3},\qquad q_n(P)=\frac{mc}{\sqrt3}\,\partial_1|_p,\qquad |q_n(P)|=\frac{mc}{\sqrt3}.$$

With $v_0:=c/2$, $z_0=1/4$ this realizes $s=v_0<c$ and the exact identities

$$E_n(P)=mc^2\Bigl(1-\frac{s^2}{c^2}\Bigr)^{-1/2},\qquad |q_n(P)|=ms\Bigl(1-\frac{s^2}{c^2}\Bigr)^{-1/2}$$

of [[lem-gr-observer-relative-velocity-expansions]], and the two uniform error
bounds of that lemma read

$$\Bigl|E_n(P)-mc^2-\tfrac12ms^2\Bigr|=\frac{mc^2(16-9\sqrt3)}{8\sqrt3}\le\frac{mc^2}{12\sqrt3},\qquad \Bigl||q_n(P)|-ms\Bigr|=\frac{mc(2-\sqrt3)}{2\sqrt3}\le\frac{mc}{6\sqrt3},$$

which are strict, finite checks of the bounds at the single relative speed
$s=c/2$.

## Facts & Assumptions
**Given:** The flat model with inertial chart $x$, the point $p$ with $x(p)=0$, the observer $n=\partial_0|_p$, the vector $u=\frac{2}{\sqrt3}\partial_0|_p+\frac{1}{\sqrt3}\partial_1|_p$, and $P=mc\,u$ with $c,m>0$.

[L1] An observer at $p$ is a future-directed vector $n$ with $g_p(n,n)=-1$; the spatial projection is $h_n(v)=v+g_p(n,v)n$ ([[def-gr-observer-and-rest-space]] clauses (a) and (c)). The projections satisfy $h_n(n)=0$, $h_n(v)=v$ for $g_p(v,n)=0$, and $g_p(h_n(v),h_n(v))=g_p(v,v)+g_p(v,n)^2$ ([[lem-gr-observer-projection-decomposition]] clauses 1-2).

[L2] For $P$ future timelike with rest mass $m>0$, $U=P/m$, $u=U/c$, $\gamma=-g_p(n,u)$: $\gamma\ge1$, $E_n(P)=mc^2\gamma$, $q_n(P)=m\gamma w$, $g_p(q_n,q_n)=m^2c^2(\gamma^2-1)$ with $w=c\,h_n(u)/\gamma$, and $E_n(P)=-cg_p(P,n)$, $q_n(P)=h_n(P)$ ([[def-gr-observer-relative-energy-and-momentum]] clauses (a)-(b), [[lem-gr-observer-energy-momentum-identities]] clause 3).

[L3] With $s:=\sqrt{g_p(w,w)}$: $s<c$, $\gamma=(1-s^2/c^2)^{-1/2}$, $E_n(P)=mc^2(1-s^2/c^2)^{-1/2}$, $|q_n(P)|=ms(1-s^2/c^2)^{-1/2}$, and for every $0\le v_0<c$ with $z_0=v_0^2/c^2<1$ and all $s\le v_0$ the two error bounds of the statement of [[lem-gr-observer-relative-velocity-expansions]] hold.

[L4] In the inertial chart $g_{ab}=\eta_{ab}=\operatorname{diag}(-1,1,1,1)$; $\eta(\partial_0,\partial_0)=-1$ and $g_p(\partial_1,\partial_1)=1$ ([[def-gr-minkowski-model-and-inertial-chart]], [[def-causal-classification-of-lorentz-vectors]]).

[L5] Arithmetic: $\sqrt3$ is the positive root of $3$ ([[def-rational-power]]) and $\frac53<\sqrt3<2$, since $\frac{25}{9}<3<4$. Hence $\frac{2}{\sqrt3}=\frac{2\sqrt3}{3}$, $\frac{1}{\sqrt3}=\frac{\sqrt3}{3}$, $\frac{1}{\sqrt3}-\frac{1}{2}=\frac{2-\sqrt3}{2\sqrt3}>0$, $9\sqrt3<16$ since $(9\sqrt3)^2=243<256=16^2$, and $27\sqrt3>46$ since $(27\sqrt3)^2=2187>2116=46^2$, both by squaring positive quantities; hence $\frac{16-9\sqrt3}{8\sqrt3}>0$.



## Verification

**Proof technique:** direct; evaluate the observer data and the mass-shell identities on the explicit vector $u$, then verify the two expansion bounds by exact algebraic comparison.

1.1 (Observer data.) By [L4], $g_p(n,n)=-1$, so $n$ is a unit future-directed timelike vector, i.e. an observer. Set $u$ as given; then $g_p(u,u)=\frac{4}{3}g_p(\partial_0,\partial_0)+\frac13g_p(\partial_1,\partial_1)=-\frac43+\frac13=-1$, so $u$ is future timelike with $g_p(u,u)=-1$, and $P=mcu$ is future timelike with rest mass $m(P)=m$ by [L2]. Further $g_p(n,u)=-\frac{2}{\sqrt3}$, so by [L1] $h_n(u)=u+g_p(n,u)n=\frac{2}{\sqrt3}\partial_0+\frac{1}{\sqrt3}\partial_1-\frac{2}{\sqrt3}\partial_0=\frac{1}{\sqrt3}\partial_1$. Hence $\gamma=-g_p(n,u)=\frac{2}{\sqrt3}\ge1$, $w=c\,h_n(u)/\gamma=\frac{c}{2}\partial_1$, and $s=\sqrt{g_p(w,w)}=\frac c2$ by [L4]. [L1, L2, L4, algebra]

2.1 (Exact energy and momentum.) By [L2] and [L4]: $E_n(P)=-cg_p(P,n)=-m c^2\,g_p(u,\partial_0)=mc^2\cdot\frac{2}{\sqrt3}$ and $q_n(P)=h_n(P)=mc\,h_n(u)=\frac{mc}{\sqrt3}\partial_1$, so $|q_n(P)|=\sqrt{g_p(q_n,q_n)}=\frac{mc}{\sqrt3}$ since $g_p(\partial_1,\partial_1)=1$. [step 1.1, L1, L2, L4, algebra]

3.1 (Exact identities at $s=c/2$.) By step 1.1, $s=c/2<c$ and $1-s^2/c^2=3/4$, so $(1-s^2/c^2)^{-1/2}=2/\sqrt3$; step 2.1 gives $E_n(P)=mc^2\cdot\frac{2}{\sqrt3}=mc^2(1-s^2/c^2)^{-1/2}$ and $|q_n(P)|=\frac{mc}{\sqrt3}=m\cdot\frac c2\cdot\frac{2}{\sqrt3}=ms(1-s^2/c^2)^{-1/2}$, which are the exact identities of [L3]. [step 1.1, step 2.1, L3, L5, algebra]

4.1 (Energy bound.) By step 3.1, $\bigl|E_n(P)-mc^2-\frac12ms^2\bigr|=mc^2\bigl|\frac{2}{\sqrt3}-1-\frac18\bigr|=mc^2\bigl(\frac{2}{\sqrt3}-\frac98\bigr)=mc^2\,\frac{16-9\sqrt3}{8\sqrt3}$, the sign being positive by [L5]. The bound of [L3] at $v_0=c/2$ is $\frac38\bigl(\frac34\bigr)^{-5/2}m\frac{(c/2)^4}{c^2}=\frac{3}{8}\cdot\frac{32}{9\sqrt3}\cdot\frac{mc^2}{16}=\frac{mc^2}{12\sqrt3}$ using $(\frac43)^{5/2}=\frac{16}{9}\cdot\frac{2}{\sqrt3}$ and $\sqrt3>0$. The inequality $\frac{16-9\sqrt3}{8\sqrt3}\le\frac{1}{12\sqrt3}$ is equivalent, upon multiplying by the positive $24\sqrt3$, to $3(16-9\sqrt3)\le2$, i.e. $27\sqrt3\ge46$, which holds by [L5]. [step 3.1, L3, L5, algebra]

5.1 (Momentum bound.) By step 3.1, $\bigl||q_n(P)|-ms\bigr|=mc\bigl|\frac{1}{\sqrt3}-\frac12\bigr|=mc\bigl(\frac{1}{\sqrt3}-\frac12\bigr)=mc\,\frac{2-\sqrt3}{2\sqrt3}$ by [L5]. The bound of [L3] at $v_0=c/2$ is $\frac12\bigl(\frac34\bigr)^{-3/2}m\frac{(c/2)^3}{c^2}=\frac12\cdot\frac{8}{3\sqrt3}\cdot\frac{mc}{8}=\frac{mc}{6\sqrt3}$ using $(\frac43)^{3/2}=\frac43\cdot\frac{2}{\sqrt3}$. The inequality $\frac{2-\sqrt3}{2\sqrt3}\le\frac{1}{6\sqrt3}$ is equivalent, upon multiplying by the positive $6\sqrt3$, to $3(2-\sqrt3)\le1$, i.e. $3\sqrt3\ge5$, which holds since $27>25$ and both sides are positive. Both bounds of the lemma are therefore satisfied strictly at the relative speed $s=c/2$, and the exact identities of step 3.1 verify its statements $s<c$, $\gamma=(1-s^2/c^2)^{-1/2}$ and the two displayed formulas. [step 3.1, step 4.1, L3, L5, algebra] ∎



- **Scope.** The example is a finite algebraic check of the kinematic identities and error bounds at one relative speed; it involves no dynamics, no conservation law and no measurement. The choices $s=c/2$ and the direction $\partial_1$ are arbitrary normalizations; the points checked are the exact identities and the two strict inequalities.
