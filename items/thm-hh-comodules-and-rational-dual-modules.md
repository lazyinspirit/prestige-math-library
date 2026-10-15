---
id: thm-hh-comodules-and-rational-dual-modules
kind: theorem
title: "Right comodules are rational modules over the dual algebra"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-dual-algebra-and-rational-module, def-hh-right-comodule-and-comodule-morphism, def-hh-scalar-and-tensor-conventions, lem-hh-tensor-coherence-on-elementary-tensors, def-left-and-right-modules, cor-a-linear-subspace-has-a-complement, lem-hh-finite-spanning-list-contains-a-basis, def-axiom-of-choice, def-algebraic-dual-and-linear-functional, def-algebra-over-a-commutative-ring, def-dimension, def-linear-combination-and-span, def-linear-map, prop-functoriality-of-module-tensor-products, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-hh-coalgebra-and-coalgebra-map]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: >-
  For arbitrary C, AC is used in Step 1.3 to separate finite tensors by full-dual functionals, extending coordinates from the finite coefficient span using a complement. This supplies uniqueness and the later reconstruction, coassociativity, and morphism-converse steps. The comodule-to-module action and rationality are choice-free, and the finite-dimensional-C branch uses a finite dual basis throughout without AC.
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
$$ (M,\rho)\longmapsto \bigl(M,\ f\cdot m:=(\operatorname{id}_M\otimes f)\rho(m)\bigr) $$
identifies right $C$-comodules and their maps with rational left $C^*=\operatorname{Hom}_k(C,k)$-modules and their maps. The finite-tensor representative defining the coaction of a rational module is unique. If $C$ is finite-dimensional, every left $C^*$-module is rational and the full correspondence is choice-free. The forward comodule-to-module construction is choice-free for every $C$.

## Facts & Assumptions

**Given:** A field $k$, a coalgebra $C$ with comultiplication $\Delta$ and counit $\varepsilon$, a right comodule $(M,\rho)$, and left modules over the candidate convolution product on $C^*$.

[F1] A coalgebra has a coassociative comultiplication $\Delta$ and a two-sided counit $\varepsilon$; its maps preserve both structure maps. ([[def-hh-coalgebra-and-coalgebra-map]])

[F2] A right comodule has $\rho:M\to M\otimes C$ with $(\rho\otimes\operatorname{id})\rho=(\operatorname{id}\otimes\Delta)\rho$ and $(\operatorname{id}\otimes\varepsilon)\rho=\operatorname{id}$. ([[def-hh-right-comodule-and-comodule-morphism]])

[F3] $C^*=\operatorname{Hom}_k(C,k)$, $(f*g)(c)=(f\otimes g)(\Delta(c))$, the candidate unit is $\varepsilon$, and rationality means that for each $m$ some $t_m\in M\otimes C$ satisfies $f\cdot m=(\operatorname{id}\otimes f)t_m$ for every $f$. ([[def-hh-dual-algebra-and-rational-module]])

[F4] Every tensor is a finite sum of elementary tensors, and the associator identifies the two parenthesizations of a triple tensor. ([[def-hh-scalar-and-tensor-conventions]], [[lem-hh-tensor-coherence-on-elementary-tensors]])

[F5] Under AC, every linear subspace $D$ of $C$ has a complement $E$ with $C=D\oplus E$. ([[cor-a-linear-subspace-has-a-complement]])

[F6] A subspace spanned by a finite list has a finite basis without choice, and finite-dimensional means having a finite basis. ([[def-linear-combination-and-span]], [[lem-hh-finite-spanning-list-contains-a-basis]], [[def-dimension]])

[F7] A left module action is bilinear, associative, and unital; here its laws are $f\cdot(g\cdot m)=(f*g)\cdot m$ and $\varepsilon\cdot m=m$. ([[def-left-and-right-modules]], [[def-algebra-over-a-commutative-ring]])

[F8] The full algebraic dual consists of all linear functionals; no topology or continuity restriction is imposed. ([[def-algebraic-dual-and-linear-functional]])

[F9] Every vector has a unique coordinate list in a finite ordered basis. Its coordinate functions are linear: the coordinate list of $ax+by$ is obtained by taking the same linear combination of the coordinate lists of $x$ and $y$, and uniqueness identifies those coordinates. ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]])

[A1] AC holds for the arbitrary-dimensional branch. ([[def-axiom-of-choice]])

## Proof

**Given:** The data above. Use finite tensor expansions only; all Sweedler sums below mean the finite expansion of the indicated coaction or coproduct followed by the specified linear maps.

1.1 For $f,g\in C^*$, the map $c\mapsto(f\otimes g)(\Delta(c))$ is a linear functional, and the formula is $k$-bilinear in $f$ and $g$, so it defines a $k$-bilinear convolution product. For $f,g,h\in C^*$ and $c\in C$, the values $((f*g)*h)(c)$ and $(f*(g*h))(c)$ are evaluations of $f\otimes g\otimes h$ on $(\Delta\otimes\operatorname{id})\Delta(c)$ and $(\operatorname{id}\otimes\Delta)\Delta(c)$, respectively; these tensors agree by [F1], so convolution is associative. The two counit equations in [F1] give $(\varepsilon*f)(c)=f(c)=(f*\varepsilon)(c)$ for every $c$, so $\varepsilon$ is a two-sided unit. Thus $a\mapsto a\varepsilon$ is a unital ring homomorphism $k\to C^*$ and is central, since $(a\varepsilon)*f=a(\varepsilon*f)=af=f*(a\varepsilon)$. This gives the existing $k$-vector-space structure on $C^*$ as a $k$-algebra. [F1, F3, F4, algebra]

1.2 Given a right comodule $(M,\rho)$, the map $C^*\times M\to M$, $(f,m)\mapsto(\operatorname{id}\otimes f)\rho(m)$, is bilinear. Writing $\rho(m)=\sum m_0\otimes m_1$, coassociativity gives $f\cdot(g\cdot m)=\sum m_0 f(m_{1,1})g(m_{1,2})=\sum m_0(f*g)(m_1)=(f*g)\cdot m$. The counit equation gives $\varepsilon\cdot m=\sum m_0\varepsilon(m_1)=m$. Hence this is a left $C^*$-module. [F1, F2, F3, F4, F7, algebra]

1.3 For every $m$, the existing tensor $\rho(m)\in M\otimes C$ represents the entire orbit because $(\operatorname{id}\otimes f)\rho(m)=f\cdot m$ for every $f$. This proves rationality without AC. To establish the separation used below, first assume [A1] and let $X$ be any vector space and $T\in X\otimes C$. Write $T=\sum_s x_s\otimes d_s$ as a finite tensor by [F4], and put $D=\operatorname{span}\{d_s\}$. By [F6], choose a finite ordered basis $c_1,\dots,c_q$ of $D$ and re-expand $T=\sum_i y_i\otimes c_i$. By [F5], choose a complement $E$ with $C=D\oplus E$. For each $i$, let $\lambda_i:D\to k$ be the $i$th coordinate function in the basis $c_1,\dots,c_q$, which is linear by [F9], and define $f_i(d+e)=\lambda_i(d)$ for $d\in D$ and $e\in E$. The unique direct-sum decomposition makes $f_i$ a linear functional on $C$, so $f_i\in C^*$ by [F8], and $(\operatorname{id}_X\otimes f_i)(T)=y_i$. Thus if every $f\in C^*$ annihilates $T$, every $y_i=0$ and $T=0$. If $C$ is finite-dimensional, [F6] gives a finite ordered basis $c_1,\dots,c_n$ of $C$; re-expanding $T=\sum_i y_i\otimes c_i$ and evaluating against its coordinate functionals recovers each $y_i$, so the same separation conclusion holds without [A1]. In either branch, if $t,t'\in M\otimes C$ both represent the orbit of $m$, then every $f\in C^*$ annihilates $t-t'$, and the applicable separation argument gives $t=t'$. [F2, F3, F4, F5, F6, F8, F9, A1, algebra]

1.4 Suppose now $C$ is finite-dimensional, without using AC. By [F6] let $c_1,\dots,c_n$ be a finite ordered basis, with coordinate functionals $c_1^*,\dots,c_n^*$ from [F9]. For any $f\in C^*$, the functionals $f$ and $\sum_i f(c_i)c_i^*$ agree on every basis vector and hence on all of $C$. For a left $C^*$-module vector $m$, put $t_m=\sum_{i=1}^n(c_i^*\cdot m)\otimes c_i$. Then $(\operatorname{id}\otimes f)t_m=\sum_i f(c_i)(c_i^*\cdot m)=f\cdot m$, so every module vector is rational. Any tensor in $M\otimes C$ can be re-expanded as $\sum_i y_i\otimes c_i$, and evaluating against $c_j^*$ recovers $y_j$; therefore the representing tensor is unique. This finite-coordinate argument uses no basis extension or arbitrary choice. [F3, F4, F6, F7, F9, algebra]

2.1 Now let $M$ be a rational left $C^*$-module. For each $m$, existence in [F3] and separation in step 1.3 make its representing tensor unique in the applicable branch; define $\rho(m)$ to be that unique tensor. Unique existence defines this function without an additional choice. For $m,n$ and $a\in k$, the tensors $\rho(m+n)$ and $\rho(m)+\rho(n)$ have the same evaluation under every $f\in C^*$ because the action is bilinear; the same holds for $\rho(am)$ and $a\rho(m)$. The separation proved in step 1.3 gives $\rho(m+n)=\rho(m)+\rho(n)$ and $\rho(am)=a\rho(m)$, so $\rho$ is linear. [F3, F7, step 1.3, algebra]

3.1 Evaluation at the unit functional $\varepsilon$ gives $(\operatorname{id}\otimes\varepsilon)\rho(m)=\varepsilon\cdot m=m$ by the module unit law. Thus $\rho$ is counital. [F1, F3, F7, step 2.1, algebra]

3.2 Fix $m$ and write $\rho(m)=\sum_i m_i\otimes c_i$. Set $T=(\rho\otimes\operatorname{id})\rho(m)-(\operatorname{id}\otimes\Delta)\rho(m)\in M\otimes C\otimes C$. For any $f,g\in C^*$, evaluation of the first term by $\operatorname{id}_M\otimes f\otimes g$ is $\sum_i g(c_i)(f\cdot m_i)=f\cdot(g\cdot m)$, while evaluation of the second term is $\sum_i(f*g)(c_i)m_i=(f*g)\cdot m$. The module associativity law makes these equal. Hence every such pairing annihilates $T$. For fixed $g$, the tensor $(\operatorname{id}_{M\otimes C}\otimes g)(T)\in M\otimes C$ is annihilated by every $\operatorname{id}_M\otimes f$, so it is zero by the separation in step 1.3. Since this holds for every $g$, a second application of that separation result to the last $C$ factor gives $T=0$. Thus $\rho$ is coassociative. [F1, F3, F4, F7, step 1.3, step 2.1, algebra]

3.3 If $u:M\to N$ is a comodule map, then $f\cdot u(m)=(\operatorname{id}_N\otimes f)\rho_N(u(m))=(\operatorname{id}_N\otimes f)(u\otimes\operatorname{id})\rho_M(m)=u(f\cdot m)$ for every $f,m$, so $u$ is a module map. Conversely, let $u$ be a $C^*$-module map. It is $k$-linear because $u(am)=u((a\varepsilon)\cdot m)=(a\varepsilon)\cdot u(m)=a u(m)$, using the $k$-bilinear module action and the unit law. Then $(\operatorname{id}_N\otimes f)(\rho_N(u(m))-(u\otimes\operatorname{id})\rho_M(m))=f\cdot u(m)-u(f\cdot m)=0$ for every $f$. The difference is a finite tensor in $N\otimes C$, so the separation in step 1.3 makes it zero. Hence $u$ is a comodule map. [F2, F4, F7, step 1.2, step 1.3, step 2.1, algebra]

4.1 In the finite-dimensional case, re-expanding the second factors of any finite tensor in a basis $c_1,\dots,c_n$ gives $\sum_i x_i\otimes c_i$, and evaluation against $c_i^*$ recovers each $x_i$. For a tensor in $X\otimes C\otimes C$, re-expand both $C$ factors to obtain $\sum_{i,j}x_{ij}\otimes c_i\otimes c_j$; evaluations against $c_i^*$ and $c_j^*$ recover every coefficient. These finite-coordinate arguments are exactly the choice-free separation branch established in step 1.3, so the separation uses in steps 2.1, 3.2, and 3.3 need no AC when $C$ is finite-dimensional. Together with step 1.4, this proves the full object and morphism correspondence in that branch without AC. [F4, F6, F8, F9, step 1.3, step 2.1, step 3.2, step 3.3, step 1.4, algebra]

5.1 Steps 1.1–1.3 construct a rational module from every right comodule and recover its unique original coaction; steps 2.1, 3.1, and 3.2 construct a right coaction from every rational module; step 3.3 proves the correspondence on maps. Steps 1.4 and 4.1 prove the full correspondence without AC when $C$ is finite-dimensional. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, step 3.2, step 3.3, step 1.4, step 4.1] ∎

## Remarks

The source treatments state this correspondence but leave part of the converse or morphism verification as an exercise or sketch. The proof above supplies the finite-tensor uniqueness, both coaction axioms, and both directions for maps. For arbitrary $C$, AC is used only for separation by all functionals; the finite-dimensional-$C$ branch is choice-free.
