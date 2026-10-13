---
id: lem-nrqm-framework-galilei-transformations-form-a-group
kind: lemma
title: "The Galilean transformations form a group of bijections of the coordinate space"
status: published
origin: session
domain: mathematics
dependency_level: 2
deps: [def-nrqm-framework-galilei-transformations, def-cm-special-orthogonal-group, lem-cm-so3-is-a-matrix-group, def-matrix-product-and-identity-matrix]
dependency_roles:
  def-nrqm-framework-galilei-transformations: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Section 1.2.1, printed pages 5-7 (PDF pages 11-13): the Galilean group of translations, rotations and boosts and the absolute-time shift"
      url: "https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 2-5 (PDF pages 8-11): the ten transformations relating inertial frames, comprising rotations, translations, boosts and time translation"
      url: "https://davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

In the notation of [[def-nrqm-framework-galilei-transformations]], with $C=\mathbb R\times\mathbb R^{3}$, $G$ the set of Galilean transformations and $\theta=(b,a,v,R)$ the parameters of $g_{\theta}$:

1. The parameter map $\theta\mapsto g_{\theta}$ is injective: if $g_{(b,a,v,R)}=g_{(b',a',v',R')}$ then $b=b'$, $a=a'$, $v=v'$ and $R=R'$.
2. Each $g_{(b,a,v,R)}$ is a bijection of $C$, with inverse
$$g_{(b,a,v,R)}^{-1}=g_{(-b,\,-R^{\mathsf T}(a-vb),\,-R^{\mathsf T}v,\,R^{\mathsf T})}.$$
3. Composition of Galilean transformations is Galilean, with
$$g_{(b_{2},a_{2},v_{2},R_{2})}\circ g_{(b_{1},a_{1},v_{1},R_{1})}=g_{(b_{1}+b_{2},\,R_{2}a_{1}+v_{2}b_{1}+a_{2},\,R_{2}v_{1}+v_{2},\,R_{2}R_{1})},$$
and $g_{(0,0,0,I_{3})}$ is the identity map of $C$.
4. Consequently $G$ is a subgroup of the group of all bijections of $C$ under composition.

## Facts & Assumptions

**Given:** The coordinate space $C$, the maps $g_{(b,a,v,R)}(t,x)=(t+b,Rx+vt+a)$ and the parameter set $\Theta$ ([[def-nrqm-framework-galilei-transformations]]).

[L1] Definition of $g_{\theta}$ and its parameters: $g_{(b,a,v,R)}(t,x)=(t+b,Rx+vt+a)$ for all $(t,x)\in C$, with $b\in\mathbb R$, $a,v\in\mathbb R^{3}$ and $R\in SO(3)$ ([[def-nrqm-framework-galilei-transformations]]).

[L2] $I_{3}\in SO(3)$; for all $R,S\in SO(3)$ the matrices $RS$ and $R^{\mathsf T}$ again lie in $SO(3)$, and $R$ is invertible with inverse $R^{\mathsf T}$, so that $RR^{\mathsf T}=R^{\mathsf T}R=I_{3}$ ([[lem-cm-so3-is-a-matrix-group]], [[def-cm-special-orthogonal-group]]).

[L3] Matrix algebra: the matrix product is associative and $I_{3}M=MI_{3}=M$ for every $3\times3$ matrix $M$; the matrix-vector products displayed in the definition satisfy $R(u+w)=Ru+Rw$, $R(\lambda u)=\lambda(Ru)$, $(\lambda R)u=\lambda(Ru)$ and $(RS)u=R(Su)$ for $u,w\in\mathbb R^{3}$ and $\lambda\in\mathbb R$, when matrices act on column vectors by the product of [[def-matrix-product-and-identity-matrix]] read componentwise; two vectors of $\mathbb R^{3}$ are equal exactly when their three components agree, and two $3\times3$ matrices are equal exactly when their nine entries agree ([[def-matrix-product-and-identity-matrix]]).

## Proof

**Proof technique:** direct.

1.1 [Injectivity] Assume $g_{(b,a,v,R)}=g_{(b',a',v',R')}$. Evaluating at $(0,0)$ and comparing first coordinates gives $b=b'$. Evaluating at $(0,x)$ then gives $Rx+a=R'x+a'$ for every $x\in\mathbb R^{3}$; at $x=0$ this gives $a=a'$, and after subtracting, $(R-R')x=0$ for every $x$, which for $x=e_{1},e_{2},e_{3}$ compares the three columns of the matrix $R-R'$ and gives $R=R'$. Evaluating at $(t,0)$ then gives $vt+a=v't+a'$ for every real $t$; subtracting the known $a=a'$ and taking $t=1$ gives $v=v'$. Hence $\theta=\theta'$. [L1, L3, algebra]

1.2 [Composition] For every $(t,x)\in C$, applying first $g_{(b_{1},a_{1},v_{1},R_{1})}$ and then $g_{(b_{2},a_{2},v_{2},R_{2})}$ gives $\bigl(t+b_{1}+b_{2},\ R_{2}(R_{1}x+v_{1}t+a_{1})+v_{2}(t+b_{1})+a_{2}\bigr)$. By the linearity and associativity identities of [L3] this equals $\bigl(t+(b_{1}+b_{2}),\ (R_{2}R_{1})x+(R_{2}v_{1}+v_{2})t+(R_{2}a_{1}+v_{2}b_{1}+a_{2})\bigr)$, which is $g_{\theta_{3}}(t,x)$ for $\theta_{3}:=(b_{1}+b_{2},\,R_{2}a_{1}+v_{2}b_{1}+a_{2},\,R_{2}v_{1}+v_{2},\,R_{2}R_{1})$; and $R_{2}R_{1}\in SO(3)$ by [L2], so $\theta_{3}\in\Theta$ and the composite is Galilean with the displayed parameters. Taking the second quadruple to be $(0,0,0,I_{3})$ makes the composite equal $g_{\theta_{1}}$ by [L2], and taking the first to be $(0,0,0,I_{3})$ makes it equal $g_{\theta_{2}}$; hence $g_{(0,0,0,I_{3})}$ is the identity map of $C$, and the composite lies in $G$. [L1, L2, L3, algebra]

1.3 [Inverse] Let $\theta=(b,a,v,R)$ and $\eta:=(-b,\,-R^{\mathsf T}(a-vb),\,-R^{\mathsf T}v,\,R^{\mathsf T})$; by [L2] $R^{\mathsf T}\in SO(3)$, so $\eta\in\Theta$. For $(t',x')\in C$ put $t:=t'-b$ and $x:=R^{\mathsf T}\bigl(x'-v(t'-b)-a\bigr)$. Then $t+b=t'$, and $Rx+vt+a=R\,R^{\mathsf T}\bigl(x'-v(t'-b)-a\bigr)+v(t'-b)+a=x'$ by $RR^{\mathsf T}=I_{3}$ of [L2]; hence $g_{\theta}(t,x)=(t',x')$ and $g_{\theta}$ is surjective. Expanding $x$ gives $x=R^{\mathsf T}x'+(-R^{\mathsf T}v)t'+\bigl(-R^{\mathsf T}(a-vb)\bigr)=g_{\eta}(t',x')$, so $g_{\theta}\circ g_{\eta}$ is the identity of $C$. If $g_{\theta}(t_{1},x_{1})=g_{\theta}(t_{2},x_{2})$ then $t_{1}=t_{2}$ from the first coordinate, and $R(x_{1}-x_{2})=0$ from the second, giving $x_{1}=x_{2}$ because $R$ is invertible by [L2]; so $g_{\theta}$ is injective, and with surjectivity it is a bijection. [L1, L2, L3, algebra]

2.1 [Two-sided inverse] By step 1.2 the composite $g_{\theta}\circ g_{\eta}$ has parameters $\bigl(-b+b,\ R a_{\eta}+v b_{\eta}+a,\ R v_{\eta}+v,\ RR^{\mathsf T}\bigr)$ with $(b_{\eta},a_{\eta},v_{\eta},R_{\eta})=\eta$, so its components are $0$, $R\bigl(-R^{\mathsf T}(a-vb)\bigr)+v(-b)+a=-(a-vb)-vb+a=0$, $R(-R^{\mathsf T}v)+v=-v+v=0$ and $RR^{\mathsf T}=I_{3}$; hence $g_{\theta}\circ g_{\eta}=g_{(0,0,0,I_{3})}$, the identity of $C$ by step 1.2. This proves clause 2 with the displayed inverse. [step 1.2, L2, L3, algebra]

3.1 [Subgroup] By steps 1.2 and 2.1 the set $G$ contains the identity of the bijection group of $C$ and is closed under composition and inversion; by step 1.1 the parameter map is injective, and every $g_{\theta}$ is a bijection by steps 1.3 and 2.1. Therefore $G$ is a subgroup of the group of all bijections of $C$ under composition, and clauses 1-4 hold. [step 1.1, step 1.2, step 1.3, step 2.1, algebra] ∎
