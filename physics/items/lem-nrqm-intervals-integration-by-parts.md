---
id: lem-nrqm-intervals-integration-by-parts
aliases: [nrqm-intervals-and-contacts-integration-by-parts]
kind: lemma
domain: mathematics
title: "Integration by parts and the endpoint-vanishing space on intervals"
status: published
origin: pipeline
dependency_level: 3
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, lem-nrqm-intervals-weak-derivative-ac-representative, lem-nrqm-intervals-endpoint-trace-and-half-line-decay, thm-integration-by-parts-for-absolutely-continuous-functions, lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous, lem-complex-translation-and-approximate-identity-interfaces, def-the-standard-smooth-step-function, lem-classical-derivatives-are-weak-derivatives, thm-dominated-convergence, def-countable-choice, def-axiom-of-choice, def-dependent-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-weak-derivative-ac-representative: mathematical-premise
  lem-nrqm-intervals-endpoint-trace-and-half-line-decay: mathematical-premise
  thm-integration-by-parts-for-absolutely-continuous-functions: mathematical-premise
  lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous: mathematical-premise
  lem-complex-translation-and-approximate-identity-interfaces: mathematical-premise
  def-the-standard-smooth-step-function: mathematical-premise
  lem-classical-derivatives-are-weak-derivatives: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.7, equation (2.116) p. 85 and Section 9.1, equation (9.4) p. 182 (integration by parts and Lagrange boundary form)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 8.2 pp. 204-210 and Section 8.5 pp. 226-230 (H-one-zero as closure of test functions and its boundary characterisation in one dimension)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume the Axioms of Choice, Countable Choice and Dependent Choice
([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]]).
Use the spaces of [[def-nrqm-intervals-hilbert-sobolev-spaces]] and the
absolutely continuous representatives supplied by
[[lem-nrqm-intervals-weak-derivative-ac-representative]].

(a) *Bounded intervals.* Let $0<L<\infty$ and $u,v\in H^1(0,L)$. Then
$\int_0^Lu\,\overline{v'}=u^*(L)\overline{v^*(L)}-u^*(0)\overline{v^*(0)}
-\int_0^Lu'\,\overline v .$

(b) *Endpoint-vanishing space.* $H^1_0(0,L)=\{u\in H^1(0,L):u^*(0)=u^*(L)=0\}$,
with the traces $u^*(0),u^*(L)$ of the continuous representative.

(c) *Second-order identity.* For $u,v\in H^2(0,L)$,
$\int_0^L\bigl(u''\overline v-u\,\overline{v''}\bigr)
=\bigl[u'^*\overline{v^*}-u^*\overline{v'^*}\bigr]_0^L,$
where the bracket denotes
$u'^*(L)\overline{v^*(L)}-u^*(L)\overline{v'^*(L)}
-u'^*(0)\overline{v^*(0)}+u^*(0)\overline{v'^*(0)}$.

(d) *Half-line and line.* If $u,v\in H^1(0,\infty)$, then
$\int_0^\infty u\overline{v'}=-u^*(0)\overline{v^*(0)}-\int_0^\infty u'\overline v$, both integrals
being absolutely convergent. For $u,v\in H^1(\mathbb R)$ one instead has
$\int_{\mathbb R}u\overline{v'}=-\int_{\mathbb R}u'\overline v$,
with both integrals absolutely convergent.

## Facts & Assumptions

**Given:** the $H^1$, $H^2$ and $H^1_0$ spaces of [[def-nrqm-intervals-hilbert-sobolev-spaces]]; the representative theorem [[lem-nrqm-intervals-weak-derivative-ac-representative]]; the trace and decay estimates [[lem-nrqm-intervals-endpoint-trace-and-half-line-decay]].

[F1] For $F,G\in AC[a,b]$, $\int_a^bFG'+\int_a^bF'G=F(b)G(b)-F(a)G(a)$ ([[thm-integration-by-parts-for-absolutely-continuous-functions]]); products of absolutely continuous functions are absolutely continuous ([[lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous]]). Applying the real identity to the real and imaginary parts of complex-valued absolutely continuous $F,G$ with $L^1$ derivatives gives the complex form $\int_a^bF\overline{G'}+\int_a^bF'\overline G=F(b)\overline{G(b)}-F(a)\overline{G(a)}$.

[F2] An $H^1$ class on a bounded interval has an absolutely continuous representative $u^*$ on the closed interval with $u^*(x)-u^*(y)=\int_y^xu'$ and $|u^*(x)-u^*(y)|\le\sqrt{|x-y|}\|u'\|_{L^2}$ ([[lem-nrqm-intervals-weak-derivative-ac-representative]]); on $(0,L)$ the trace bound $|u^*(x)|\le L^{-1/2}\|u\|_{L^2(0,L)}+L^{1/2}\|u'\|_{L^2(0,L)}$ holds for all $x\in[0,L]$, and on the half-line $|u^*(x)|\le\|u\|_{L^2(x,x+1)}+\|u'\|_{L^2(x,x+1)}$ with $u^*(x)\to0$ as $x\to\infty$ ([[lem-nrqm-intervals-endpoint-trace-and-half-line-decay]]).

[F3] The standard smooth step $\sigma$ of [[def-the-standard-smooth-step-function]] is smooth with $\sigma=0$ on $(-\infty,0]$, $\sigma=1$ on $[1,\infty)$ and $0\le\sigma\le1$; its derivative is bounded with $\|\sigma'\|_\infty\le C_\sigma$.

[F4] Fix a real $\rho\in C_c^\infty(\mathbb R)$ with $\int\rho=1$, for example $\rho=\sigma'$ from [F3], whose integral is $\sigma(1)-\sigma(0)=1$ by [F1]. Set $\rho_\delta(t)=\delta^{-1}\rho(t/\delta)$. By [[lem-complex-translation-and-approximate-identity-interfaces]], $\|\rho_\delta*g-g\|_{L^2(\mathbb R)}\to0$ for $g\in L^2(\mathbb R)$, and convolution maps compactly supported locally integrable inputs to smooth compactly supported functions with $(\rho_\delta*g)'=\rho_\delta'*g$. Step 1.2 proves the needed derivative commutation for its particular zero extension by integration by parts; classical derivatives of smooth functions are weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]).

[F5] Dominated convergence ([[thm-dominated-convergence]]): if $|g_\varepsilon|\le h$ with $h$ integrable and $g_\varepsilon\to g$ pointwise almost everywhere, then $\int g_\varepsilon\to\int g$.

## Proof

1.1 [Bounded integration by parts] Let $u,v\in H^1(0,L)$. By [F2], the products $u^*\overline{v^*}$ and the derivative classes $u'\overline v$ and $u\overline{v'}$ are integrable; by [F1] in its complex form applied to $F=u^*$ and $G=v^*$ (whose real and imaginary parts are absolutely continuous with $L^1$ derivatives), $\int_0^L\bigl(u'\overline v+u\overline{v'}\bigr) =u^*(L)\overline{v^*(L)}-u^*(0)\overline{v^*(0)},$ which is exactly (a). [F1, F2]

1.2 [Zero traces lie in $H^1_0$] Let $u\in H^1(0,L)$ satisfy $u^*(0)=u^*(L)=0$. For $0<\varepsilon<L/4$ put $\chi_\varepsilon(x):=\sigma(2x/\varepsilon-1)\sigma(2(L-x)/\varepsilon-1)$ with $\sigma$ as in [F3]. Then $\chi_\varepsilon$ is smooth, $0\le\chi_\varepsilon\le1$, equals one on $[\varepsilon,L-\varepsilon]$, vanishes on $[0,\varepsilon/2]\cup[L-\varepsilon/2,L]$, and has $|\chi_\varepsilon'|\le4C_\sigma/\varepsilon$, supported in $S_\varepsilon:=[0,\varepsilon]\cup[L-\varepsilon,L]$. The AC product rule [F1] gives $u_\varepsilon:=\chi_\varepsilon u\in H^1(0,L)$ with weak derivative $\chi_\varepsilon'u+\chi_\varepsilon u'$; its support lies in $[\varepsilon/2,L-\varepsilon/2]$. Extending by zero to $\mathbb R$ preserves this weak derivative because the product vanishes near both endpoints. Choose a finite $R\ge1$ with $\operatorname{supp}\rho\subseteq[-R,R]$. For $0<\delta<\varepsilon/(4R)$ the convolution $u_{\varepsilon,\delta}:=\rho_\delta*u_\varepsilon$ is smooth by [F4] and its support lies in $[\varepsilon/2-R\delta,L-\varepsilon/2+R\delta]\subset(0,L)$, because the integrand vanishes outside the sum of the two supports. The zero extension of $u_\varepsilon^*$ is absolutely continuous on every bounded interval, with compact support and derivative $u_\varepsilon'$. For fixed $x$, apply [F1] on an interval containing that support to $u_\varepsilon^*(t)$ and $\rho_\delta(x-t)$; the boundary term vanishes and $\frac{d}{dt}\rho_\delta(x-t)=-\rho_\delta'(x-t)$, so $(\rho_\delta*u_\varepsilon)'=\rho_\delta'*u_\varepsilon=\rho_\delta*u_\varepsilon'$. Applying [F4] separately to the function and derivative proves $u_{\varepsilon,\delta}\to u_\varepsilon$ in $H^1$ as $\delta\to0$, with every such approximant in $C_c^\infty(0,L)$. [F1, F3, F4, given, construct]

2.1 [The cutoff converges to $u$] By [F5], $\|(\chi_\varepsilon-1)u\|_2\to0$ and $\|(\chi_\varepsilon-1)u'\|_2\to0$. The zero traces and the integral representative in [F2] give, for $0\le x\le\varepsilon$, $|u^*(x)|^2\le x\int_0^\varepsilon|u'|^2$, and for $L-\varepsilon\le x\le L$, $|u^*(x)|^2\le(L-x)\int_{L-\varepsilon}^L|u'|^2$. Thus the derivative term of step 1.2 satisfies $\|\chi_\varepsilon'u\|_2^2\le(4C_\sigma/\varepsilon)^2(\varepsilon^2/2)\int_{S_\varepsilon}|u'|^2=8C_\sigma^2\int_{S_\varepsilon}|u'|^2\to0$ by [F5], since $|u'|^2$ is integrable and the strip indicators tend to zero almost everywhere. Hence $u_\varepsilon\to u$ in $H^1$; each $u_\varepsilon$ lies in the $H^1$ closure of $C_c^\infty(0,L)$ by step 1.2, and that closure is closed, so $u\in H^1_0(0,L)$. [step 1.2, F2, F5, algebra]

2.2 [Second-order identity] Let $u,v\in H^2(0,L)$. Applying (a) to the pair $(u',v)$ and to the pair $(u,v')$, both in $H^1(0,L)$, gives $\int_0^Lu''\overline v=\bigl[u'^*\overline{v^*}\bigr]_0^L-\int_0^Lu'\overline{v'}, \qquad \int_0^Lu\overline{v''}=\bigl[u^*\overline{v'^*}\bigr]_0^L-\int_0^Lu'\overline{v'} .$ Subtracting the second identity from the first gives (c). [step 1.1, F1, F2, algebra]

3.1 [Traces of $H^1_0$ classes vanish] Conversely let $u\in H^1_0(0,L)$; by definition there are $u_n\in C_c^\infty(0,L)$ with $u_n\to u$ in $H^1$. For each $x\in[0,L]$ the trace bound of [F2] gives $|u_n^*(x)-u^*(x)|\le L^{-1/2}\|u_n-u\|_{L^2}+L^{1/2}\|u_n'-u'\|_{L^2},$ so $u_n^*\to u^*$ uniformly on $[0,L]$. Since $u_n^*(0)=0=u_n^*(L)$, it follows that $u^*(0)=0=u^*(L)$. Together with step 2.1 this proves (b). [step 2.1, F2]

4.1 [Half-line and line] Let $u,v\in H^1(0,\infty)$. Step 1.1 on $(0,R)$ gives $\int_0^Ru\overline{v'}=u^*(R)\overline{v^*(R)}-u^*(0)\overline{v^*(0)}-\int_0^Ru'\overline v$. The boundary term at $R$ tends to zero by [F2], while both integrals converge absolutely by Cauchy–Schwarz (or $|u\overline{v'}|\le(|u|^2+|v'|^2)/2$), so $\int_0^\infty u\overline{v'}=-u^*(0)\overline{v^*(0)}-\int_0^\infty u'\overline v$. For $u,v\in H^1(\mathbb R)$, apply this identity to their positive-half-line restrictions and to the reflected negative-half-line restrictions $u(-x),v(-x)$. Reflection reverses the derivative sign, so the negative-half-line identity has the opposite origin term $+u^*(0)\overline{v^*(0)}$. The representatives on the two sides have the same trace at zero by [F2]; adding cancels the origin terms and gives the claimed whole-line identity. [step 1.1, F2, F5, algebra] ∎
