---
id: cex-f4-bare-nodal-evaluation-supercharge-not-closable
kind: counterexample
title: F4 Bare Nodal Evaluation Supercharge Not Closable
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-smooth-up-to-the-boundary-density-on-smooth-domains
  - thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-smooth-up-to-the-boundary-density-on-smooth-domains: mathematical-premise
  thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p: mathematical-premise
status: published
origin: session
physical_scope: >-
  Pure local functional-analysis counterexample under the explicit Euclidean
  disk and H1 graph-norm hypotheses; no actual physical degeneration is assumed.
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University lecture notes, 2026)"
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: "Chapter 1 §1.8, Theorem 1.21: smooth functions are dense in W^{1,2} on open sets."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020 lecture notes)"
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: "Chapter 3 §3.6, Theorem 3.9, printed pp. 57–58: smooth functions are dense in W^{1,2} on a bounded smooth domain."
---

## Statement

Assume the Axiom of Choice. Let $B=\{x\in\mathbb R^2:|x|<1\}$ be the open unit
disk with Lebesgue measure, let $H=L^2(B;\mathbb C)$, and write
$C_c^\infty(B;\mathbb C)$ for the compactly supported smooth complex
functions on $B$. A function $v_j\in L^2(B;\mathbb C)$ is the weak derivative
$\partial_j u$ of $u\in L^2(B;\mathbb C)$ when
$\int_Bu\,\partial_j\phi=-\int_Bv_j\phi$ for every
$\phi\in C_c^\infty(B;\mathbb C)$. Define
$H^1(B):=\{u\in L^2(B;\mathbb C):\partial_1u,\partial_2u\in L^2(B;\mathbb C)\}$
with norm
$\|u\|_{H^1}^2=\|u\|_2^2+\|\partial_1u\|_2^2+\|\partial_2u\|_2^2$.
Let $K$ be a complex Hilbert space and regard $D$ as an unbounded complex-linear map
$D:\operatorname{Dom}(D)=H^1(B)\subset H\to K$. Assume that $D$ is densely
defined and closed and that constants $c,C>0$ satisfy
$
c\|u\|_{H^1(B)}\le (\|u\|_{L^2(B)}^2+\|Du\|_K^2)^{1/2}
\le C\|u\|_{H^1(B)}\quad(u\in H^1(B)).
$
Let $\mathscr D=\{F|_{\overline B}:F\in C^\infty(\mathbb R^2;\mathbb C)\}$
be the smooth test space, and for a fixed $\lambda\in\mathbb C\setminus\{0\}$
define $A:\mathscr D\oplus\mathscr D\subset H\oplus H\to K\oplus K\oplus\mathbb C$ by
$
A(u_+,u_-)=(Du_+,Du_-,u_+(0)-\lambda u_-(0)).
$

For a densely defined linear operator $T:\operatorname{Dom}(T)\subset X\to Y$
between Hilbert spaces, write $\Gamma(T)=\{(x,Tx):x\in\operatorname{Dom}(T)\}$.
Call $T$ closable when the closure of $\Gamma(T)$ in $X\oplus Y$ is the graph
of an operator; equivalently, every sequence $x_n\in\operatorname{Dom}(T)$
with $x_n\to0$ and $Tx_n\to y$ has $y=0$. The smooth test space $\mathscr D$
is dense in $H$, but $A$ is not closable from $H\oplus H$ to
$K\oplus K\oplus\mathbb C$. Moreover, the smooth branch pairs satisfying
$u_+(0)=\lambda u_-(0)$ are dense in $H^1(B)\oplus H^1(B)$. Thus a bare
point-matching condition is lost under this graph-norm completion. This result
uses the Euclidean disk and the stated $H^1$-equivalent graph norm; it is not a
claim about every physical singular metric or domain.

## Facts & Assumptions

**Given:** The Axiom of Choice, disk, Sobolev and Hilbert spaces, operator $D$, graph-norm
equivalence, and nonzero scalar $\lambda$ in the Statement.

[A1] The Axiom of Choice is the stated set-theoretic hypothesis ([[def-axiom-of-choice]]).

[F1] For a bounded smooth domain, integer $k\ge1$ and $1\le p<\infty$,
restrictions of ambient smooth functions are dense in $W^{k,p}$
([[thm-smooth-up-to-the-boundary-density-on-smooth-domains|Ambient smooth restrictions are dense on bounded $C^k$ domains]]). In particular
this supplies the $H^1(B)$ density used below, but its statement does not include
$k=0$.

[F2] Under countable choice, complex $C_c^\infty(\mathbb R^n)$ is dense in
Euclidean Lebesgue $L^p$ for $n\ge1$ and $1\le p<\infty$
([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]]).
The full Axiom of Choice in [A1] supplies this countable-choice hypothesis.

## Proof

**Given:** The hypotheses in the Statement.

1.1 For $f\in L^2(B;\mathbb C)$, let $\widetilde f$ be its zero extension to
$\mathbb R^2$. Then $\widetilde f\in L^2(\mathbb R^2;\mathbb C)$ with the
same norm. For each $\varepsilon>0$, [F2] with $n=2$, $p=2$ gives
$g\in C_c^\infty(\mathbb R^2;\mathbb C)$ such that
$\|g-\widetilde f\|_{L^2(\mathbb R^2)}<\varepsilon$. Its restriction to
$\overline B$ lies in $\mathscr D$, and
$\|g|_B-f\|_{L^2(B)}\le\|g-\widetilde f\|_{L^2(\mathbb R^2)}<\varepsilon$.
Thus $\mathscr D$ is dense in $H$. [given, A1, F2, construct, algebra]

1.2 Define $\rho(t)=0$ for $t\le0$ and $\rho(t)=e^{-1/t}$ for $t>0$, and
put $\chi(t)=\rho(t)/(\rho(t)+\rho(1-t))$. The denominator is positive,
$\chi$ is smooth, $\chi=0$ on $(-\infty,0]$, $\chi=1$ on $[1,\infty)$,
and $\chi'$ is supported in $[0,1]$. For $0<\varepsilon<1$, set
$L_\varepsilon=\log(1/\varepsilon)$ and
$
\eta_\varepsilon(r)=\chi\!\left(\frac{\log(r/\varepsilon^2)}{L_\varepsilon}\right)
\quad(r>0),\qquad \eta_\varepsilon(0)=0.
$
It is smooth and radial because it is constant for $r\le\varepsilon^2$ and
for $r\ge\varepsilon$. It equals zero near $0$ and one for $r\ge\varepsilon$.
The function $\psi_\varepsilon=1-\eta_\varepsilon$ has support in
$\overline B_\varepsilon$, so $\|\psi_\varepsilon\|_2^2\le\pi\varepsilon^2$.
In polar coordinates, with $t=\log(r/\varepsilon^2)/L_\varepsilon$,
$
\int_B|\nabla\eta_\varepsilon|^2
=\frac{2\pi}{L_\varepsilon}\int_0^1|\chi'(t)|^2\,dt\longrightarrow0.
$
Therefore $\psi_\varepsilon\to0$ in $H^1(B)$, while
$\psi_\varepsilon(0)=1$. [given, construct, algebra]

2.1 The graph closure criterion in the Statement is equivalent to the usual
closed-extension definition: a graph closure that is a graph is a closed
extension, and any closed extension contains the graph closure. Its being a
graph is equivalent to having no nonzero vector $(0,v)$; such a vector belongs
to the graph closure exactly when a sequence of domain elements tends to zero
while their outputs tend to $v$. Put $\psi_\varepsilon$ on the plus branch
and zero on the minus branch.
The inputs tend to zero in $L^2\oplus L^2$, and graph-norm equivalence gives
$D\psi_\varepsilon\to0$ in $K$. Their point-difference output is always
$1$. Hence the graph of $A$ contains
$((\psi_\varepsilon,0),(D\psi_\varepsilon,0,1))\to(0,(0,0,1))$.
It also contains the zero graph pair $(0,(0,0,0))$. The closure of the graph
therefore contains two distinct outputs over the same zero input, so it is
not the graph of an operator. Thus $A$ is not closable. [given, step 1.2, construct]

3.1 For smooth $u$ on $\overline B$,
$
\|(1-\eta_\varepsilon)u\|_2^2\le\|u\|_\infty^2\pi\varepsilon^2,
$
and the product rule gives
$
\|\nabla((1-\eta_\varepsilon)u)\|_2^2
\le2\|\nabla u\|_\infty^2\pi\varepsilon^2
+\frac{4\pi\|u\|_\infty^2}{L_\varepsilon}\int_0^1|\chi'(t)|^2dt\to0.
$
Thus $\eta_\varepsilon u\to u$ in $H^1(B)$. For a smooth pair $(u_+,u_-)$,
$(\eta_\varepsilon u_+,\eta_\varepsilon u_-)$ is zero at both origins,
so it satisfies the matching condition and converges to the pair in
$H^1\oplus H^1$. By [F1], smooth pairs are dense in $H^1(B)\oplus H^1(B)$.
The closure of the matched smooth pairs is consequently the whole direct-sum
space. This proves the claimed loss of point matching under completion.
[A1, F1, step 1.2, algebra] ∎
