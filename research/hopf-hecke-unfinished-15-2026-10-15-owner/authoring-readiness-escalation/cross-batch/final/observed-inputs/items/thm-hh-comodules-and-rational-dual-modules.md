---
id: thm-hh-comodules-and-rational-dual-modules
kind: theorem
title: "Right comodules are rational modules over the dual algebra"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-dual-algebra-and-rational-module, def-hh-right-comodule-and-comodule-morphism, def-hh-scalar-and-tensor-conventions, lem-hh-tensor-coherence-on-elementary-tensors, def-left-and-right-modules, lem-hh-coefficient-extension-and-finite-tensor-separation, def-axiom-of-choice, def-algebraic-dual-and-linear-functional, def-algebra-over-a-commutative-ring, def-linear-map, prop-functoriality-of-module-tensor-products, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-hh-coalgebra-and-coalgebra-map]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: >-
  AC is used for the arbitrary-C reconstruction, uniqueness, and morphism converse only through the published coefficient-extension/separation lemma. The comodule-to-module direction and the separate finite-dimensional-C reconstruction use finite algebraic tensors and finite coordinate functionals and are choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel Kongsgaard and UCSD Math 207A, Hopf Algebras Lecture Notes, Spring 2020"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "§1.6, printed pp.11–15; Examples 1.15–1.16, pp.13–14; §§3.3–3.4, printed pp.36–41"
    - title: "William Chin, A Brief Introduction to Coalgebra Representation Theory"
      url: "https://condor.depaul.edu/~wchin/crt.pdf"
      locator: "§2, printed pp.2–3"
---
## Statement

Assume AC and let $C$ be a coalgebra over a field $k$. The assignment
$$
(M,\rho)\longmapsto \bigl(M,\ f\cdot m:=(\operatorname{id}_M\otimes f)\rho(m)\bigr)
$$
identifies right $C$-comodules and their maps with rational left $C^*=\operatorname{Hom}_k(C,k)$-modules and their maps. The finite-tensor representative defining the coaction of a rational module is unique. If $C$ is finite-dimensional, every left $C^*$-module is rational and the full correspondence is choice-free. The forward comodule-to-module construction is choice-free for every $C$.

## Facts & Assumptions

**Given:** A field $k$, a coalgebra $C$ with comultiplication $\Delta$ and counit $\varepsilon$, a right comodule $(M,\rho)$, and left modules over the candidate convolution product on $C^*$.

[F1] A coalgebra has a coassociative comultiplication $\Delta$ and a two-sided counit $\varepsilon$; its maps preserve both structure maps. ([[def-hh-coalgebra-and-coalgebra-map]])

[F2] A right comodule has $\rho:M\to M\otimes C$ with $(\rho\otimes\operatorname{id})\rho=(\operatorname{id}\otimes\Delta)\rho$ and $(\operatorname{id}\otimes\varepsilon)\rho=\operatorname{id}$. ([[def-hh-right-comodule-and-comodule-morphism]])

[F3] $C^*=\operatorname{Hom}_k(C,k)$, $(f*g)(c)=(f\otimes g)(\Delta(c))$, the candidate unit is $\varepsilon$, and rationality means that for each $m$ some $t_m\in M\otimes C$ satisfies $f\cdot m=(\operatorname{id}\otimes f)t_m$ for every $f$. ([[def-hh-dual-algebra-and-rational-module]])

[F4] If $c_1,\dots,c_r$ are linearly independent, then $\sum_i c_i\otimes x_i=0$ implies every $x_i=0$ under AC; when the ambient coefficient space is finite-dimensional, the finite-coordinate proof needs no AC. In particular, functionals separate finite tensors in $X\otimes C$. ([[lem-hh-coefficient-extension-and-finite-tensor-separation]])

[F5] Every element of $M\otimes C$ is a finite sum of elementary tensors, and the associator identifies the two parenthesizations of a triple tensor. ([[def-hh-scalar-and-tensor-conventions]], [[lem-hh-tensor-coherence-on-elementary-tensors]])

[F6] A left module action is bilinear, associative, and unital; here its laws are $f\cdot(g\cdot m)=(f*g)\cdot m$ and $\varepsilon\cdot m=m$. ([[def-left-and-right-modules]], [[def-algebra-over-a-commutative-ring]])

[F7] The full algebraic dual consists of all linear functionals; no topology or continuity restriction is imposed. ([[def-algebraic-dual-and-linear-functional]])

[F8] Every finite-dimensional vector space has a finite ordered basis with unique coordinates, whose coordinate functionals form its dual basis. ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]])

[A1] AC holds for coefficient separation in arbitrary-dimensional $C$. ([[def-axiom-of-choice]])

## Proof

**Given:** The data above. Use finite tensor expansions only; all Sweedler sums below mean the finite expansion of the indicated coaction or coproduct followed by the specified linear maps.

1.1 For $f,g,h\in C^*$ and $c\in C$, bilinearity of the pairing defines $f*g\in C^*$. The two values $((f*g)*h)(c)$ and $(f*(g*h))(c)$ are evaluations of $f\otimes g\otimes h$ on $(\Delta\otimes\operatorname{id})\Delta(c)$ and $(\operatorname{id}\otimes\Delta)\Delta(c)$, respectively; these tensors agree by [F1], so convolution is associative. The two counit equations in [F1] give $(\varepsilon*f)(c)=f(c)=(f*\varepsilon)(c)$ for every $c$, so $\varepsilon$ is a two-sided unit. Thus the candidate product in [F3] is a unital associative algebra product. [F1, F3, F5, algebra]

1.2 Given a right comodule $(M,\rho)$, the map $C^*\times M\to M$, $(f,m)\mapsto(\operatorname{id}\otimes f)\rho(m)$, is bilinear. Writing $\rho(m)=\sum m_0\otimes m_1$, coassociativity gives
 $f\cdot(g\cdot m)=\sum m_0 f(m_{1,1})g(m_{1,2})=\sum m_0(f*g)(m_1)=(f*g)\cdot m$.
The counit equation gives $\varepsilon\cdot m=\sum m_0\varepsilon(m_1)=m$. Hence this is a left $C^*$-module. [F1, F2, F3, F5, F6, algebra]

1.3 For every $m$, the existing tensor $\rho(m)\in M\otimes C$ represents the entire orbit because $(\operatorname{id}\otimes f)\rho(m)=f\cdot m$ for every $f$. This proves rationality without AC. If $t,t'\in M\otimes C$ both represent that orbit, then $(\operatorname{id}\otimes f)(t-t')=0$ for all $f\in C^*$, where $C^*$ is the full algebraic dual [F7]; [A1] and [F4] imply $t=t'$. [F2, F3, F4, F7, A1, algebra]

1.4 Now let $M$ be a rational left $C^*$-module. For each $m$ choose its representing tensor $t_m$ from [F3]; by [A1] and [F4] it is unique. Define $\rho(m):=t_m$. For $m,n$ and $a\in k$, the tensors $\rho(m+n)$ and $\rho(m)+\rho(n)$ have the same evaluation under every $f\in C^*$ because the action is bilinear; the same holds for $\rho(am)$ and $a\rho(m)$. Separation [F4] gives $\rho(m+n)=\rho(m)+\rho(n)$ and $\rho(am)=a\rho(m)$, so $\rho$ is linear. [A1, F3, F4, F6, algebra]

1.5 Suppose now $C$ is finite-dimensional, without using AC. Let $c_1,\dots,c_n$ be a finite ordered basis with dual basis $c_1^*,\dots,c_n^*$ by [F8]. For any left $C^*$-module vector $m$, put $t_m=\sum_{i=1}^n(c_i^*\cdot m)\otimes c_i$. For $f=\sum_i f(c_i)c_i^*$, one has $(\operatorname{id}\otimes f)t_m=\sum_i f(c_i)(c_i^*\cdot m)=f\cdot m$, so every module vector is rational. The representing tensor is unique because the dual basis coordinates recover its first-factor coefficients. This finite-coordinate argument uses no basis extension or arbitrary choice. [F3, F4, F6, F8, algebra]

2.1 Evaluation at the unit functional $\varepsilon$ gives $(\operatorname{id}\otimes\varepsilon)\rho(m)=\varepsilon\cdot m=m$ by the module unit law. Thus $\rho$ is counital. [F1, F3, F6, step 1.4, algebra]

2.2 Fix $m$ and write $\rho(m)=\sum_i m_i\otimes c_i$. Set $T=(\rho\otimes\operatorname{id})\rho(m)-(\operatorname{id}\otimes\Delta)\rho(m)\in M\otimes C\otimes C$. For any $f,g\in C^*$, evaluation of the first term by $\operatorname{id}_M\otimes f\otimes g$ is $\sum_i g(c_i)(f\cdot m_i)=f\cdot(g\cdot m)$, while evaluation of the second term is $\sum_i(f*g)(c_i)m_i=(f*g)\cdot m$. The module associativity law makes these equal. Hence every such pairing annihilates $T$. For fixed $g$, the tensor $(\operatorname{id}_{M\otimes C}\otimes g)(T)\in M\otimes C$ is annihilated by every $\operatorname{id}_M\otimes f$, so it is zero by [A1] and [F4]. Since this holds for every $g$, a second application of [F4] to the last $C$ factor gives $T=0$. Thus $\rho$ is coassociative. [A1, F1, F3, F4, F5, F6, step 1.4, algebra]

2.3 If $u:M\to N$ is a comodule map, then $f\cdot u(m)=(\operatorname{id}_N\otimes f)\rho_N(u(m))=(\operatorname{id}_N\otimes f)(u\otimes\operatorname{id})\rho_M(m)=u(f\cdot m)$ for every $f,m$, so $u$ is a module map. Conversely, if $u$ is a module map, then $(\operatorname{id}_N\otimes f)(\rho_N(u(m))-(u\otimes\operatorname{id})\rho_M(m))=f\cdot u(m)-u(f\cdot m)=0$ for every $f$. The difference is a finite tensor in $N\otimes C$, so [A1] and [F4] make it zero. Hence $u$ is a comodule map. [A1, F2, F4, F5, F6, step 1.2, step 1.4, algebra]

3.1 In the finite-dimensional case, every finite tensor in $X\otimes C$ has a unique expansion $\sum_i x_i\otimes c_i$, and evaluating against each $c_i^*$ recovers $x_i$. Every finite tensor in $X\otimes C\otimes C$ likewise has an expansion $\sum_{i,j}x_{ij}\otimes c_i\otimes c_j$, and evaluations against $c_i^*\otimes c_j^*$ recover all coefficients. Therefore the separation uses in steps 1.3, 1.4, 2.2, and 2.3 can all be carried out without AC when $C$ is finite-dimensional. Together with step 1.5, this proves the full object and morphism correspondence in that branch without AC. [F4, F5, F8, step 1.3, step 1.4, step 2.2, step 2.3, step 1.5, algebra]

4.1 Steps 1.1–1.3 construct a rational module from every right comodule and recover its unique original coaction; steps 1.4, 2.1, and 2.2 construct a right coaction from every rational module; step 2.3 proves the correspondence on maps. Steps 1.5 and 3.1 prove the full correspondence without AC when $C$ is finite-dimensional. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 2.2, step 2.3, step 1.5, step 3.1] ∎

## Remarks

The source treatments state this correspondence but leave part of the converse or morphism verification as an exercise or sketch. The proof above supplies the finite-tensor uniqueness, both coaction axioms, and both directions for maps. For arbitrary $C$, AC is used only for separation by all functionals; the finite-dimensional-$C$ branch is choice-free.
