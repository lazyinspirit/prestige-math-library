# Actual relative-edge Hasse homotopies

This is a new direct operation on a supplied strongly admissible balanced link diagram with n>1 w marks, using its actual finite regular strips and index-two compactification. Set every z variable to one, but initially keep w variables independent. No graph Cerf theorem or diagram comparison is assumed.

## Twisted finite actual counts

Let lambda be an immersed path on the Heegaard surface from a w mark to a DIFFERENT w mark, transverse to alpha and beta, missing generators and other marks. Weight each actual strip by its signed alpha-boundary intersection a(lambda,B) as well as its ordinary w monomial, and multiply it by T to that integer power. This gives a finite Laurent-polynomial matrix D(T); in particular negative weights cause no convergence issue. At T=1 it is the actual ordinary differential D and its first coefficient at T=1+h is the actual edge action A_lambda.

The weight is additive under breaking. The index-two end proof can therefore be counted with this extra weight, using precisely the same moduli and collars. For an alpha cut-component domain Ai the weight is delta(end in Ai) minus delta(start in Ai): its entire boundary is alpha, so its crossings telescope along the path. A beta cut-component has alpha-boundary weight zero. Consequently the ACTUAL weighted boundary identity is
$$D(T)^2=\sum_i U_i\bigl(T^{\delta_{i,\mathrm{end}}-\delta_{i,\mathrm{start}}}+1\bigr)I.$$
Every alpha and beta component still has unit degeneration count one; no new analytic normalization has been assumed. Before identifying U variables, the coefficient of h is U_start+U_end. After identifying all U_i with U it vanishes, so A_lambda is a chain map. The h-squared coefficient of the right side is U: T=1+h contributes no h-squared term, while T inverse contributes one. Write H_lambda for the h-squared coefficient of the finite Laurent matrix D(1+h), working modulo h cubed. The h-squared coefficient on the left gives the explicit homotopy
$$D H_\lambda+H_\lambda D=A_\lambda^2+U I.$$
Here the coefficient of T to a in degree two is the integer binomial(a,2) reduced modulo two, also for negative a. Thus H_lambda is a defined finite weighted count. An ordinary second derivative in characteristic two would not prove this relation.

## Two edges and marked derivatives

For two paths lambda and mu, use two Laurent variables T and S and weight each strip by T to a(lambda,B) times S to a(mu,B). The same boundary proof has alpha monomial T to epsilon_i(lambda) times S to epsilon_i(mu), where epsilon is its signed endpoint incidence, and beta monomial one. Taking the mixed coefficient hk after T=1+h and S=1+k, and then identifying the w variables with U, gives
$$D H_{\lambda,\mu}+H_{\lambda,\mu}D=A_\lambda A_\mu+A_\mu A_\lambda+U\,c(\lambda,\mu)I.$$
The number c is the number of common endpoints modulo two, with multiplicity. No interior intersection term occurs: these weights are intersections with the alpha boundary chain, and the degeneration's entire boundary telescopes to endpoint incidence. The mixed coefficient defines H explicitly, so the relation holds even when the two immersed paths cross.

For each w mark differentiate the first-coefficient identity BEFORE identifying its U variable. The ordinary differential has D Phi_w+Phi_w D=0 because its independent-w curvature is already zero after forgetting z. The derivative of D A_lambda+A_lambda D=(U_start+U_end)I is therefore
$$D(\partial_{U_w}A_\lambda)+(\partial_{U_w}A_\lambda)D=\Phi_w A_\lambda+A_\lambda\Phi_w+\delta_{w\in\partial\lambda}I.$$
All operators on the right and the displayed homotopy specialize to the uniform-U ordinary complex. The derivative removes one U power, exactly as the marked action does. Thus this also constructs the endpoint action homotopy rather than asserting it from a graph formalism.

## Scope

These are actual finite-count homotopies for edge squares, edge interchange and edge/marked interchange on supplied n>1 diagrams. The same argument for closed paths has zero endpoint curvature and gives square homotopic to zero; for n=1 its twisted square identity still requires a twisted version of the insertion bootstrap and is not asserted here. Concatenation of paths is strictly additive at the boundary-weight level. None of these identities proves the basepoint-motion comparison S- A S+=the actual isotopy map for a long path, invariance of arbitrary graph words, a band-triangle comparison or the full decorated movie identities. Those remaining geometric comparisons are needed before the disk-w-region tower statement or annulus stable splitting can be concluded.
