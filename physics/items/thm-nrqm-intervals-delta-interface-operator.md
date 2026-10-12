---
id: thm-nrqm-intervals-delta-interface-operator
aliases: [nrqm-intervals-and-contacts-delta-interface-operator]
kind: theorem
domain: mathematics
title: "The one-dimensional delta interface operator"
status: draft
origin: pipeline
dependency_level: 5
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, lem-nrqm-intervals-weak-derivative-ac-representative, lem-nrqm-intervals-endpoint-trace-and-half-line-decay, lem-nrqm-intervals-integration-by-parts, lem-nrqm-intervals-free-line-resolvent, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, thm-self-adjointness-range-criterion, def-adjoint-of-a-densely-defined-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-densely-defined-closed-and-closable-operator, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-weak-derivative-ac-representative: mathematical-premise
  lem-nrqm-intervals-endpoint-trace-and-half-line-decay: mathematical-premise
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
  lem-nrqm-intervals-free-line-resolvent: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  thm-self-adjointness-range-criterion: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sarang Gopalakrishnan, Self-Adjointness and the Renormalization of Singular Potentials (Amherst College honors thesis, 2006), Chapter 1 pp. 15-32 and Chapter 2 pp. 33-56 (the one-dimensional delta domain and its self-adjointness)"
      url: "https://math.ucr.edu/home/baez/gopalkrishnan.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.2 pp. 187-193 (self-adjoint realisations of one-dimensional differential expressions with point boundary conditions)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Fix $\alpha\in\mathbb R$. Let $D(A_\alpha)$ be
the set of classes $u\in H^1(\mathbb R)$ whose restrictions to $(0,\infty)$
and $(-\infty,0)$ have representatives of class $H^2$ on each half-line
([[def-nrqm-intervals-hilbert-sobolev-spaces]]) and which satisfy the
**interface condition**
$u'^*(0+)-u'^*(0-)=\alpha\,u^*(0),$
where $u^*$ is the continuous representative of [[lem-nrqm-intervals-weak-derivative-ac-representative]]
and $u'^*(0\pm)$ are the one-sided traces of the representative of the weak
derivative, which exist by
[[lem-nrqm-intervals-endpoint-trace-and-half-line-decay]]. For
$u\in D(A_\alpha)$ define $A_\alpha u$ to be the class equal to $-D^2u$ on
each half-line. Then:

(a) $D(A_\alpha)$ is a dense linear subspace of $L^2(\mathbb R;\mathbb C)$
and $A_\alpha:D(A_\alpha)\to L^2(\mathbb R)$ is a well-defined linear
operator;

(b) $A_\alpha$ is symmetric;

(c) $A_\alpha$ is self-adjoint; explicitly, for $z\in\mathbb C\setminus\mathbb R$
the operator $A_\alpha-z$ is a bijection $D(A_\alpha)\to L^2(\mathbb R)$.

## Facts & Assumptions

**Given:** $\alpha\in\mathbb R$; the domain $D(A_\alpha)$ and operator $A_\alpha$ of the statement.

[F1] Traces: every $H^1$ class on an interval has a unique continuous absolutely continuous representative, with $|u^*(x)-u^*(y)|\le\sqrt{|x-y|}\|u'\|_{L^2}$ and the endpoint bound $|u^*(x)|\le\delta^{-1/2}\|u\|_{L^2(c,d)}+\delta^{1/2}\|u'\|_{L^2(c,d)}$ on each interval $(c,d)\ni x$ of length $\delta$ ([[lem-nrqm-intervals-weak-derivative-ac-representative]], [[lem-nrqm-intervals-endpoint-trace-and-half-line-decay]]).

[F2] Integration by parts on half-lines: for $u,v\in H^1(0,\infty)$, $\int_0^\infty u\overline{v'}=-u^*(0+)\overline{v^*(0+)}-\int_0^\infty u'\overline v$; on $(-\infty,0)$ the origin contribution instead is $+u^*(0-)\overline{v^*(0-)}$; the boundary products at $\pm\infty$ vanish by the decay of $H^1$ representatives ([[lem-nrqm-intervals-integration-by-parts]] clause (d), [[lem-nrqm-intervals-endpoint-trace-and-half-line-decay]]).

[F3] The free line operator: for $z\notin[0,\infty)$ and $k$ with $k^2=-z$, $\operatorname{Re}k>0$, the kernel $G_z(t)=(2k)^{-1}e^{-k|t|}$ defines a bounded operator $R_0(z)f=G_z*f$ on $L^2(\mathbb R)$ with range $H^2(\mathbb R)$, $R_0(z)(A_0-z)=I_{H^2}$ and $(A_0-z)R_0(z)=I_{L^2}$, where $A_0u=-D^2u$ on $H^2(\mathbb R)$; also $G_z'(0+)-G_z'(0-)=-1$ and $r(0)=\int_{\mathbb R}G_z(y)f(y)dy$ for $r=R_0(z)f$ ([[lem-nrqm-intervals-free-line-resolvent]], [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]).

[F4] Smooth compactly supported functions are dense in $L^2(\mathbb R)$ ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]] with $k=0$, $p=2$); the range criterion for a densely defined symmetric operator $T$: $T$ is self-adjoint iff $\operatorname{ran}(T-z)=H$ for every $z\in\mathbb C\setminus\mathbb R$ ([[thm-self-adjointness-range-criterion]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

## Proof

1.1 [Density] Let $\varphi\in C_c^\infty(\mathbb R\setminus\{0\})$. Then $\varphi^*=\varphi$ vanishes near $0$, so $\varphi'^*(0+)-\varphi'^*(0-)=0=\alpha\varphi^*(0)$ and both half-line restrictions are smooth with compact support: $\varphi\in D(A_\alpha)$. Now let $f\in L^2(\mathbb R)$ and $\varepsilon>0$. By [F4] there is $\psi\in C_c^\infty(\mathbb R)$ with $\|f-\psi\|<\varepsilon$. Choose a function $\chi\in C^\infty(\mathbb R)$ with $\chi=0$ near $0$ and $\chi=1$ outside $[-1,1]$, and put $\chi_\delta(x):=\chi(x/\delta)$. Then $\chi_\delta\psi\in C_c^\infty(\mathbb R\setminus\{0\})$ and $\|\chi_\delta\psi-\psi\|_{L^2}\to0$ as $\delta\to0$ by dominated convergence, since $|\chi_\delta\psi-\psi|\le2|\psi|\in L^1\cap L^2$ and the left side tends to $0$ pointwise. For small $\delta$, $\|\chi_\delta\psi-\psi\|<\varepsilon$, so $D(A_\alpha)$ contains a dense subspace. [F1, F4, algebra]

1.2 [Well-definedness] Let $u\in D(A_\alpha)$. By definition the restrictions $u_\pm$ lie in $H^2$ on the two half-lines, so their second weak derivatives $D^2u_\pm$ are $L^2$ classes on those half-lines; the class $A_\alpha u$ obtained by gluing $-D^2u_+$ and $-D^2u_-$ is in $L^2(\mathbb R)$ and depends only on the class $u$. The assignment is linear because weak differentiation and restriction are linear. [F1, given]

1.3 [Symmetry] Let $u,v\in D(A_\alpha)$. Splitting the integrals and integrating by parts twice on each half-line, using [F2] and the vanishing of the boundary products at $\pm\infty$, $\langle A_\alpha u,v\rangle =\bigl(u'^*(0+)-u'^*(0-)\bigr)\overline{v^*(0)} +\int_{\mathbb R}(Du)\overline{Dv} =\alpha u^*(0)\overline{v^*(0)}+\int_{\mathbb R}(Du)\overline{Dv} .$ (On each half-line the two integrations by parts produce the boundary contribution of the derivative jump, and the intermediate terms $\int Du\overline{Dv}$ combine.) Hence $\langle A_\alpha u,v\rangle-\langle u,A_\alpha v\rangle =\alpha u^*(0)\overline{v^*(0)}-\overline{\alpha v^*(0)\overline{u^*(0)}}=0,$ so $A_\alpha$ is symmetric. [F1, F2, given, algebra]

2.1 [Range at nonreal $z$] Fix $z\in\mathbb C\setminus\mathbb R$, $f\in L^2(\mathbb R)$, and put $r:=R_0(z)f\in H^2(\mathbb R)$, so that $(A_0-z)r=f$ by [F3]. Let $k$ with $k^2=-z$, $\operatorname{Re}k>0$, and put $u:=r+c\,G_z,\qquad c:=-\frac{\alpha\,r(0)}{1+\alpha G_z(0)}=-\frac{\alpha\,r(0)}{1+\alpha/(2k)} .$ The denominator does not vanish: if $1+\alpha/(2k)=0$, then $2k=-\alpha\in\mathbb R$, contradicting $\operatorname{Im}k\ne0$ (which holds because $k^2=-z$ is nonreal). Since $r,G_z\in H^1(\mathbb R)$ (steps (a) of [[lem-nrqm-intervals-free-line-resolvent]]), $u\in H^1(\mathbb R)$; on each half-line $u$ is a linear combination of $H^2$ functions, hence satisfies the half-line regularity in the definition of $D(A_\alpha)$. The trace of $Du$ at $0$ jumps only through $G_z$: $r\in H^2(\mathbb R)$ has a continuous derivative representative at $0$, while $G_z'(0+)-G_z'(0-)=-1$ by [F3]. Therefore $u'^*(0+)-u'^*(0-)=-c=\alpha\Bigl(r(0)+\frac{c}{2k}\Bigr)=\alpha u^*(0),$ where the middle equality uses the definition of $c$ and $G_z(0)=(2k)^{-1}$. So $u\in D(A_\alpha)$, and away from $0$ $(A_\alpha-z)u=-D^2(r+cG_z)-z(r+cG_z)=(f+zr)-zr+0=f,$ since $-D^2r-zr=f$ on $\mathbb R$ and $-D^2G_z-zG_z=0$ on each half-line (direct computation from $G_z''=k^2G_z$ and $k^2=-z$). Hence $\operatorname{ran}(A_\alpha-z)=L^2(\mathbb R)$ for every nonreal $z$. [step 1.2, F1, F3, given, algebra]

3.1 [Self-adjointness] Steps 1.1 and 1.3 give a densely defined symmetric operator, and step 2.1 gives $\operatorname{ran}(A_\alpha-z)=L^2(\mathbb R)$ for $z=\pm i$; the range criterion [F4] makes $A_\alpha$ self-adjoint. [step 1.1, step 1.3, step 2.1, F4] ∎
