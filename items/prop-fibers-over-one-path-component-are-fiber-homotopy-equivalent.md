---
id: "prop-fibers-over-one-path-component-are-fiber-homotopy-equivalent"
kind: "proposition"
title: "Fibers over one path component are fiber homotopy equivalent"
deps: ["def-fiber-transport-and-monodromy-action", "prop-pullbacks-of-fibrations-are-fibrations", "prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace", "prop-higher-homotopy-basepoint-transport-and-moving-homotopies", "thm-connected-subsets-of-r-are-intervals"]
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

## Statement

For a Hurewicz fibration, fibers joined by a path in the base are homotopy equivalent as spaces. Transport $T_\gamma$ is independent up to homotopy of its continuous lifting function and of endpoint-fixed homotopy of $\gamma$. For consecutive paths $\gamma,\eta$,
$$T_{\gamma*\eta}\simeq T_\eta T_\gamma,\qquad T_{c_b}\simeq\mathrm{id}_{F_b},\qquad T_{\bar\gamma}T_\gamma\simeq\mathrm{id}_{F_b},\qquad T_\gamma T_{\bar\gamma}\simeq\mathrm{id}_{F_c}.$$
All homotopies have fixed target fiber. The pullback to an interval along $\gamma$ is fiber homotopy equivalent over the interval to $F_b\times I$. This is choice-free. For a Serre fibration, the inclusions $F_b\to\gamma^*E\leftarrow F_c$ are weak homotopy equivalences: they induce bijections on path components and isomorphisms on every positive homotopy group at every fiber basepoint. Arbitrary Serre fibers need not be homotopy equivalent, as the explicit ordinary-space counterexample below shows. For a Hurewicz fibration, if $F_b$ is path connected and every fiber loop acts trivially by basepoint transport on $\pi_n(F_b,e)$, transport gives a canonical right action of $\pi_1(B,b)$ on this fixed group, for that $n\ge1$.

## Facts & Assumptions

[F1] A continuous universal lifting function defines transport without a regularity assumption. [[def-fiber-transport-and-monodromy-action]]

[F2] Pullbacks preserve both Hurewicz and Serre fibrations. [[prop-pullbacks-of-fibrations-are-fibrations]]

[F3] Relative lifting follows by a disk-cylinder change of domain and, for CGWH closed cofibrations, by the explicit HLP construction. [[prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace]]

[F4] Basepoint transport has $\beta_{a*b}=\beta_a\beta_b$, and a moving homotopy with basepoint track $d$ gives $f_*=\beta_d g_*$. [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]]

[F5] The interval is connected. [[thm-connected-subsets-of-r-are-intervals]]

## Proof

**Given:** A fibration of the specified type and a path $\gamma:b\to c$; for the Hurewicz clauses use the continuous lift families of F1.


1.1 For the Serre assertion let $q:P=\gamma^*E\to I$ and fix $i=0$ or $1$. By F2 it is Serre. Given a based cube $a:(I^n,\partial I^n)\to(P,e)$ with $e\in F_i$, deform its height by $K(x,s)=(1-s)q(a(x))+si$. F3 lifts this finite relative problem starting at $a$, with constant value $e$ prescribed on $\partial I^n\times I$. The endpoint is a based cube in $F_i$ and the lift is a based homotopy in $P$. Thus inclusion is surjective on every $\pi_n$, $n\ge1$. To prove injectivity, start with a based homotopy $a:I^n\times I\to P$ between cubes in $F_i$ and deform its height by the same formula. Prescribe $a$ unchanged on $(\partial I^n\times I)\cup(I^n\times\{0,1\})$, where the height is already $i$. This is a finite cubical subcomplex, so F3 supplies the relative lift; its deformation endpoint is a homotopy wholly in $F_i$. Inclusion is injective, and is a homomorphism because postcomposition preserves cubical concatenation. For components, lift a height path from any point of $P$ to $i$; deform a path between two points of $F_i$ by the same relative procedure with both endpoints fixed. This proves surjectivity and injectivity on $\pi_0$. If a fiber is empty then path lifting makes $P$ empty, with the unique bijection of empty component sets and no based assertions. Only finite lifting problems were used. [F2, F3]

1.2 We first compare continuous lift families. Suppose $a_0,a_1:Z\times I\to E$ project to the two ends of a continuous base-path homotopy $h:Z\times I\times I\to B$, fixed in its path endpoints, and their initial values agree. On the parameter square prescribe $a_0,a_1$ on its two vertical sides and their common initial map on the bottom. The bottom-and-sides square is carried to a single bottom edge by the disk-pair homeomorphism in F3. Tensor this homeomorphism with $Z$ and apply Hurewicz HLP with parameter $Z\times I$ to obtain a lift over the square. Its top edge is a homotopy between the two endpoint maps into the same endpoint fiber (or fiber over the varying endpoint map of $Z$). This argument works for arbitrary ordinary $Z$, and in CGWH with k-products. It needs neither a cofibration of a point in $Z$ nor a regular lifting function. [F3]

1.3 For a counterexample put $C=\{0,1\}^{\mathbb N}$ with the topology of finite coordinate cylinders. Every singleton is closed, distinct points are separated by complementary clopen coordinate cylinders, and no singleton is open: any finite cylinder permits changing a later coordinate. Every path in $C$ is constant, since each coordinate of a path maps the connected interval continuously into the discrete two-point space. Likewise every map from $D^n$ into $C$ is constant, by restricting it to line segments between pairs of points (also for $n=0$). Give the set $E=C\times I$ the topology generated by product opens and $V_c=\{c\}\times[0,1)$ for each $c$. The projections $p:E\to I$ and $r:E\to C$ are continuous. Each vertical map $s_c(t)=(c,t)$ is continuous: the inverse image of $V_d$ is $[0,1)$ if $d=c$, otherwise empty, and product opens also have open inverse images. [F5]

1.4 Fix $n\ge1$ and a path-connected fiber $F=F_b$ such that $\beta_l=\mathrm{id}$ on $\pi_n(F,e)$ for every loop $l$ at $e$. For any map $f:F\to F$ and path $a:e\to f(e)$ set $A_f=\beta_a f_*$. This is independent of $a$: if $a'$ is another choice then $a*\bar a'$ is a loop at $e$, so F4 gives $\beta_a\beta_{\bar a'}=\mathrm{id}$ and hence $\beta_a=\beta_{a'}$. If $H:f\simeq g$ has track $d:f(e)\to g(e)$, F4 gives $f_*=\beta_d g_*$; thus correction by $a$ for $f$ equals correction by $a*d$ for $g$. Finally the radial-shell formula in F4 commutes pointwise with any continuous postcomposition $g$, giving $g_*\beta_a=\beta_{g a}g_*$ with the appropriate source basepoints. For corrections $a_f:e\to f(e)$ and $a_g:e\to g(e)$, the concatenation $a_g*g(a_f)$ goes from $e$ to $gf(e)$, and this naturality and F4 give $A_{gf}=A_g A_f$. All endpoint paths exist by path connectedness, and the resulting maps are uniquely specified, so no indexed choice of paths is required. [F4]

2.1 Apply step 1.2 with $Z=F_b$, constant initial map in the path parameter equal to $e\mapsto e$, and either two lifting functions for the same path or lifts of two endpoint-fixed-homotopic paths. This proves both independence assertions. The constant path has the continuous constant lift $a(e,t)=e$, so comparison gives $T_{c_b}\simeq\mathrm{id}$. Concatenate the chosen continuous lifts of $\gamma$ and $\eta$, the latter starting at the first endpoint. The resulting endpoint is $T_\eta T_\gamma$; comparison with a lift of $\gamma*\eta$ proves the composition formula. [F1, step 1.2]

2.2 In the example, for $f:D^n\to E$ and a base homotopy $H$ starting at $pf$, the map $rf$ is a constant $c$. Consequently $L(z,t)=s_c(H(z,t))$ is a continuous lift with the required initial value. This proves Serre HLP in every degree without choosing any family of lifts. The fiber at $0$ is discrete because the sets $V_c$ isolate its points; the fiber at $1$ has exactly the original cylinder topology of $C$, because every additional generator misses it. Both fibers have only constant paths. Hence any homotopy into either is pointwise constant; homotopy-inverse maps would therefore be inverse homeomorphisms. Such a homeomorphism cannot exist since one fiber is discrete and the other has no isolated points. This refutes unrestricted Serre homotopy equivalence. More precisely, $f:C\to E$, $f(c)=(c,1)$, is continuous, but $H(c,t)=1-t$ has no continuous lift starting at $f$. A lift must have constant label on each time path, hence be $(c,1-t)$; at any fixed $t>0$ the inverse image of $V_d$ is the nonopen singleton $\{d\}$. Thus whole-fiber HLP fails. This counterexample is asserted in ordinary spaces; no compact-generation claim is needed. [F5, step 1.3]

3.1 The retracing loop $\gamma*\bar\gamma$ contracts rel endpoints by the formula $\gamma(2t(1-s))$ on $t\le1/2$ and $\gamma(2(1-t)(1-s))$ on $t\ge1/2$. Reversing the path gives the analogous contraction at $c$. Step 2.1 gives both inverse homotopies displayed in the statement, so transports are homotopy equivalences. If one fiber is empty, a nonempty other fiber would lift the reversed path into it, a contradiction; thus both are empty, and their unique maps are equivalences. [F1, step 2.1]

3.2 Let $q:P\to I$ be the pullback along $\gamma$, a Hurewicz fibration by F2. For $t\in I$ put $\alpha_t(s)=st$ and $\bar\alpha_t(s)=(1-s)t$. Transport in $q$ gives continuous maps $U:F_0\times I\to P$, $U(e,t)=T_{\alpha_t}(e)$, and $V:P\to F_0\times I$, $V(z)=(T_{\bar\alpha_{q(z)}}(z),q(z))$. These maps are over $I$. Their composites transport along $\alpha_t*\bar\alpha_t$ and $\bar\alpha_t*\alpha_t$, up to the comparison of step 1.2, now with the extra $t$ or $z$ parameter. Retracing contracts these paths with their endpoints fixed, continuously in the parameter. Step 1.2 therefore gives homotopies of both composites to the identity over $I$, proving the fiber homotopy equivalence. This uses continuous families, not separate equivalences selected for each $t$. [F1, F2, step 1.2, step 2.1]

4.1 Constant paths, $t=0$ in step 3.2, and one-point fibers satisfy the same comparison argument; it does not require $T_{c_b}$ to equal the identity pointwise. The homology local system and its isomorphisms in F1 now follow by functoriality and homotopy invariance. All constructed homotopies are obtained from single HLP problems, so no indexed choice is used. The argument uses parameter spaces as large as the whole fiber; disk HLP alone would not authorize it. The Serre conclusion follows from its separate finite-domain argument. [F1, step 2.1, step 3.1, step 3.2]

5.1 Apply step 1.4 to the transport maps. Step 2.1 identifies transports for homotopic base paths and different lifting functions up to homotopy, and gives $T_{\gamma*\eta}\simeq T_\eta T_\gamma$. Therefore $A_{\gamma*\eta}=A_\eta A_\gamma$ and $A_{c_b}=\mathrm{id}$. The reversed loop supplies the inverse. Thus $x\cdot[\gamma]=A_\gamma x$ is a right group action, with automorphisms of $\pi_n(F,e)$, independent of all auxiliary endpoint paths and lifts. For $n=1$ the trivial-loop-transport hypothesis says the group is abelian, by the conjugation formula in F4; a simply connected fiber satisfies the hypothesis in every positive degree. The empty fiber has no based group and is excluded by the chosen basepoint; a singleton satisfies the condition and has the trivial action. [F4, step 2.1, step 1.4] ∎
